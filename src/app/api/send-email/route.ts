import { NextResponse } from 'next/server';
import { sendEmail } from '../../lib/email-service';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendEmail({
      to: process.env.GMAIL_TO_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      htmlContent,
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