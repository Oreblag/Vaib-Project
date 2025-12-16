import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    console.log('Received form data:', { firstName, lastName, email, phone, service, message });

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { message: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Check if email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Map service values to readable labels
    const serviceLabels = {
      'construction': 'Building Construction',
      'designs': 'Architecture & Structural Designs',
      'engineering': 'Infrastructure & Civil Engineering',
      'procurement': 'Project Management & Procurement',
      'logistics': 'International Trade Logistics',
      'development': 'Real Estates Development',
      'others': 'Other Services'
    };

    const serviceLabel = serviceLabels[service] || service;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Quote Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 120px; background-color: #f9f9f9;">Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Phone:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Phone:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Service:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9; vertical-align: top;">Message:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666; font-size: 12px; text-align: center;">
            This quote request was sent from vaib - project - limited request form on ${new Date().toLocaleDateString()}.
          </p>
        </div>
      `,
      text: `
        NEW QUOTE REQUEST
        =================
        
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Service: ${serviceLabel}
        
        Message:
        ${message}
        
        ---------------------------
        Sent from vaib - project - limited request form on ${new Date().toLocaleDateString()}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}