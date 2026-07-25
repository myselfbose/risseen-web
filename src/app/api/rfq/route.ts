import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      companyName, 
      contactPerson, 
      email, 
      phone, 
      segment, 
      budget, 
      timeline, 
      projectBrief 
    } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"RFQ System" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email, // Directly reply to the user's email address
      subject: `New RFQ Submission: ${companyName}`,
      html: `
        <h2>New RFQ Received</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Segment:</strong> ${segment}</p>
        <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <hr />
        <h3>Project Brief</h3>
        <p>${projectBrief}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}