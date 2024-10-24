// src/app/api/send-email/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Email content with proper MIME formatting
    // Note the \r\n line endings and empty line between headers and content
    const emailContent = [
      `From: "Contact Form" <${process.env.GMAIL_FROM_EMAIL}>`,
      `To: ${process.env.GMAIL_TO_EMAIL}`,
      `Subject: New Contact Form Submission from ${name}`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      '',  // This empty line is crucial!
      `<h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>`
    ].join('\r\n');

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}