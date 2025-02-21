import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs'
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = environment.apiBaseUrl + '/Email/SendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: Email): Observable<any> {
    const formData = new FormData();
    formData.append('SenderEmail', emailData.senderEmail);
    formData.append('SenderPassword', emailData.senderPassword);
    formData.append('ReceiverEmail', emailData.receiverEmail);
    formData.append('Subject', emailData.subject);
    formData.append('Body', emailData.body);

    if (emailData?.attachments) {
      for (let file of emailData.attachments) {
        formData.append('Attachments', file, file.name);
      }
    }

    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
