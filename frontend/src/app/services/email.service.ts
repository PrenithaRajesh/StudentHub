import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:5000/api/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    const formData = new FormData();
    formData.append('SenderEmail', emailData.senderEmail);
    formData.append('SenderPassword', emailData.senderPassword);
    formData.append('ReceiverEmail', emailData.receiverEmail);
    formData.append('Subject', emailData.subject);
    formData.append('Body', emailData.body);

    if (emailData.attachments) {
      for (let file of emailData.attachments) {
        formData.append('Attachments', file, file.name);
      }
    }

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
