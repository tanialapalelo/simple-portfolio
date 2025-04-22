import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: Request) {
  const { name, email, message, recaptchaValue } = await req.json();

  // Step 1: Ensure the secret key is available
  if (!RECAPTCHA_SECRET_KEY) {
    return NextResponse.json({ error: 'Missing reCAPTCHA secret key' }, { status: 500 });
  }

  // Step 2: Verify reCAPTCHA
  if (!recaptchaValue) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
  }

  try {
    // Send verification request to Google reCAPTCHA API
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaValue,
      }),
    });

    const recaptchaData = await recaptchaResponse.json();

    // Check if reCAPTCHA verification succeeded
    if (!recaptchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Step 3: Send email using Resend if reCAPTCHA is valid
    await resend.emails.send({
      from: 'Tania Contact <hello@tania.dev>', // Should match your verified domain
      to: 'yourpersonal@email.com', // Replace with your email
      subject: `Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
