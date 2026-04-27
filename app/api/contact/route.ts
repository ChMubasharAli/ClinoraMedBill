import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, practice, specialty } = body;

    // Validate required fields
    if (!name || !email || !phone || !practice || !specialty) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template
    const mailOptions = {
      from: `"ClinoraMedBill Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🔔 New Consultation Request from ${name} - ${practice}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #f7fbfb; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 8px 32px rgba(29, 48, 47, 0.09); overflow: hidden; }
            .header { background: linear-gradient(90deg, #1d302f, #2c8d93); padding: 24px 30px; text-align: center; }
            .header h2 { color: #ffffff; margin: 0; font-family: 'Poppins', Arial, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
            .header p { color: rgba(255, 255, 255, 0.7); margin: 6px 0 0; font-size: 13px; }
            .body { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; font-weight: 700; color: #2c8d93; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #1d302f; font-weight: 500; background: #f0f6f6; padding: 10px 14px; border-radius: 8px; border-left: 3px solid #2c8d93; }
            .highlight { background: #e8f6f7; border-left-color: #1d302f; }
            .footer { background: #1d302f; padding: 16px 30px; text-align: center; }
            .footer p { color: rgba(255, 255, 255, 0.4); margin: 0; font-size: 11px; }
            .badge { display: inline-block; background: rgba(44, 141, 147, 0.15); color: #2c8d93; padding: 4px 10px; border-radius: 6px; font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>ClinoraMedBill</h2>
              <p>New Consultation Request Received</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">👤 Full Name</div>
                <div class="field-value highlight">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">📧 Work Email</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">📞 Phone Number</div>
                <div class="field-value">${phone}</div>
              </div>
              <div class="field">
                <div class="field-label">🏥 Practice / Organization</div>
                <div class="field-value highlight">${practice}</div>
              </div>
              <div class="field">
                <div class="field-label">🩺 Specialty</div>
                <div class="field-value">${specialty}</div>
              </div>
              <div style="text-align: center;">
                <span class="badge">📅 Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "full", timeStyle: "short" })}</span>
              </div>
            </div>
            <div class="footer">
              <p>© 2026 ClinoraMedBill · Revenue Cycle Management</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW CONSULTATION REQUEST
========================
Name: ${name}
Email: ${email}
Phone: ${phone}
Practice: ${practice}
Specialty: ${specialty}
Submitted: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our team will contact you within 1 business hour.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
