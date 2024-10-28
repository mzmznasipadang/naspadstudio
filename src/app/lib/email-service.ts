import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export type EmailOptions = {
  to: string;
  subject: string;
  htmlContent: string;
  attachments?: Array<{
    filename: string;
    content: string;
    mimeType: string;
  }>;
}

export async function sendEmail({ to, subject, htmlContent, attachments }: EmailOptions) {
  try {
    // Create email boundary for multipart messages
    const boundary = 'boundary' + Date.now().toString(16);

    // Start building email content
    const emailParts = [
      `From: "NasPad Studio" <${process.env.GMAIL_FROM_EMAIL}>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      htmlContent,
    ];

    // Add attachments if any
    if (attachments?.length) {
      attachments.forEach(attachment => {
        emailParts.push(
          `--${boundary}`,
          `Content-Type: ${attachment.mimeType}`,
          'Content-Transfer-Encoding: base64',
          `Content-Disposition: attachment; filename="${attachment.filename}"`,
          '',
          attachment.content
        );
      });
    }

    // Close the boundary
    emailParts.push(`--${boundary}--`);

    // Join with proper email line endings
    const emailContent = emailParts.join('\r\n');

    // Encode email content
    const encodedEmail = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}