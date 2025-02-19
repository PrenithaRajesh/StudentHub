using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
   public class EmailModel
{
    public string SenderEmail { get; set; } = string.Empty;
    public string ReceiverEmail { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Body { get; set; } = string.Empty;
    public List<IFormFile> Attachments { get; set; } = new List<IFormFile>();
}
}