export interface Email {
    senderEmail: string;
    senderPassword: string;
    receiverEmail: string;
    subject: string;
    body: string;
    attachments: File[];
}