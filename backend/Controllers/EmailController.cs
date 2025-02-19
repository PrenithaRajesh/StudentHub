using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MailKit.Net.Smtp;
using MimeKit;
using MimeKit.Text;
using System.IO;
using System.Threading.Tasks;
using backend.Models;

[Route("api/email")]
[ApiController]
public class EmailController : ControllerBase
{
    private readonly IConfiguration _config;

    public EmailController(IConfiguration config)
    {
        _config = config;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendEmail([FromForm] EmailModel emailRequest)
    {
        try
        {
            // Create a MimeMessage object
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Sender", _config["EmailSettings:SenderEmail"]));
            message.To.Add(new MailboxAddress("", emailRequest.ReceiverEmail));
            message.Subject = emailRequest.Subject;

            var bodyBuilder = new BodyBuilder
            {
                TextBody = emailRequest.Body
            };

            // Check if attachments exist and add them
            if (emailRequest.Attachments?.Count > 0)
            {
                foreach (var attachment in emailRequest.Attachments)
                {
                    using (var stream = new MemoryStream())
                    {
                        await attachment.CopyToAsync(stream);
                        bodyBuilder.Attachments.Add(attachment.FileName, stream.ToArray());
                    }
                }
            }

            message.Body = bodyBuilder.ToMessageBody();

            // Send the email using SMTP
            using (var smtp = new SmtpClient())
            {
                var smtpServer = _config["EmailSettings:SMTPServer"];
                var portString = _config["EmailSettings:Port"];
                if (smtpServer == null || portString == null)
                {
                    throw new System.Exception("SMTP server or port configuration is missing.");
                }
                await smtp.ConnectAsync(smtpServer, int.Parse(portString), MailKit.Security.SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync(_config["EmailSettings:SenderEmail"], _config["EmailSettings:SenderPassword"]);
                await smtp.SendAsync(message);
                await smtp.DisconnectAsync(true);
            }

            return Ok(new { message = "Email Sent Successfully!" });

        }
        catch (System.Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }
}



