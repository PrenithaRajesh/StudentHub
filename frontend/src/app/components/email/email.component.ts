import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmailService } from '../../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent {
  emailData = {
    senderEmail: 'studenthubproj@gmail.com',
    senderPassword: 'zdln upnx pnbb mxco',
    receiverEmail: '',
    subject: '',
    body: '',
    attachments: null
  };

  constructor(
    private emailService: EmailService,
    public dialogRef: MatDialogRef<EmailComponent>,
    private snackBar: MatSnackBar, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Received receiverEmail:', data.receiverEmail); 
    this.emailData.receiverEmail = data.receiverEmail;
  }

  onSendEmail() {
    this.emailService.sendEmail(this.emailData).subscribe(
      response => {
        console.log('Email sent successfully!', response);
        this.showSuccessPopup();  
        this.dialogRef.close();
      },
      error => {
        console.error('Error sending email:', error);
       
      }
    );
  }

  onFileChange(event: any) {
    this.emailData.attachments = event.target.files.length ? event.target.files : null;
  }

  showSuccessPopup() {
    this.snackBar.open('✅ Email Sent Successfully!', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success-snackbar']
    });
  }

}
