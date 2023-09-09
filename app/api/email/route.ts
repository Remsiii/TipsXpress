import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@app/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, lastName, discountCode, username, image } = await request.json();

  try {
    await resend.sendEmail({
      from: 'onboarding@resend.dev' || '',
      to: 'petabet.betting@gmail.com',
      subject: 'Anmeldung',
      react: WelcomeEmail({
        firstName, 
        email, 
        lastName, 
        discountCode, 
        username, 
        image,
      })
    });
    return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
  

}