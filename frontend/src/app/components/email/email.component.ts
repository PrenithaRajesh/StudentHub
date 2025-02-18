import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmailService } from '../services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent {
  emailData = {
    senderEmail: '',
    senderPassword: '',
    receiverEmail: '',
    subject: '',
    body: '',
    attachments: null
  };

//  Add the constructor to the class
  constructor(
    private emailService: EmailService,
    public dialogRef: MatDialogRef<EmailComponent>,
    private snackBar: MatSnackBar, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //console.log('Received receiverEmail:', data.receiverEmail); 
    this.emailData.receiverEmail = data.receiverEmail;
  }

  

  // Trigger the popup on successful email send
  onSendEmail() {
    this.emailService.sendEmail(this.emailData).subscribe(
      response => {
        console.log('Email sent successfully!', response);
        this.showSuccessPopup();  // Show success popup here
        this.dialogRef.close();
      },
      error => {
        console.error('Error sending email:', error);
       
      }
    );
  }
//  Add event parameter to the function
  onFileChange(event: any) {
    this.emailData.attachments = event.target.files;
  }

  // Success Snackbar Popup
  showSuccessPopup() {
    this.snackBar.open('✅ Email Sent Successfully!', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success-snackbar']
    });
  }

}
