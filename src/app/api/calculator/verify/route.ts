import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface SelectedService {
  label: string;
  qty: number;
  price: number;
  unit: string;
}

// Firebase already verified the OTP client-side.
// This route only sends the admin email notification.
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { phone, selectedServices, total } = body as {
    phone: string;
    selectedServices: SelectedService[];
    total: number;
  };

  try {
    await notifyAdmin(phone, selectedServices, total);
  } catch (err) {
    console.error('Admin email failed:', err);
  }

  return NextResponse.json({ success: true });
}

async function notifyAdmin(phone: string, services: SelectedService[], total: number) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const adminEmail = process.env.ADMIN_EMAIL ?? gmailUser;

  if (!gmailUser || !gmailPass || gmailPass === 'your_16_char_app_password_here') {
    console.warn('[ADMIN NOTIFY] Gmail credentials not configured. Skipping email.');
    console.log(`[ENQUIRY] Phone: +91${phone} | Total: ₹${total.toLocaleString('en-IN')}`);
    services.forEach((s) => console.log(`  • ${s.label} ×${s.qty} = ₹${(s.price * s.qty).toLocaleString('en-IN')}`));
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass },
  });

  const serviceRows = services
    .map(
      (s) => `<tr>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a">${s.label}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a;text-align:center">${s.qty} ${s.unit}${s.qty > 1 ? 's' : ''}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a;text-align:right">₹${(s.price * s.qty).toLocaleString('en-IN')}</td>
      </tr>`,
    )
    .join('');

  const html = `
    <div style="background:#141110;color:#e5e0d8;font-family:Arial,sans-serif;padding:32px;border-radius:8px;max-width:600px">
      <h2 style="color:#C5922A;margin:0 0 8px">📸 New Package Enquiry</h2>
      <p style="color:#9a9a8a;margin:0 0 24px">A visitor has verified their number and requested a package estimate.</p>
      <p style="margin:0 0 4px"><strong>Phone:</strong> +91 ${phone}</p>
      <h3 style="color:#C5922A;margin:24px 0 12px">Selected Services</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <thead>
          <tr style="background:#1e1b18">
            <th style="padding:8px 12px;text-align:left;color:#C5922A">Service</th>
            <th style="padding:8px 12px;color:#C5922A">Qty</th>
            <th style="padding:8px 12px;text-align:right;color:#C5922A">Amount</th>
          </tr>
        </thead>
        <tbody>${serviceRows}</tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding:12px;font-weight:bold;color:#C5922A">Estimated Total</td>
            <td style="padding:12px;font-weight:bold;color:#C5922A;text-align:right">₹${total.toLocaleString('en-IN')}</td>
          </tr>
        </tfoot>
      </table>
      <p style="margin:24px 0 0;color:#9a9a8a;font-size:12px">Please follow up with the client at your earliest convenience.</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"The Flash Room Studio" <${gmailUser}>`,
    to: adminEmail,
    subject: `📸 New Enquiry from +91 ${phone} — Est. ₹${total.toLocaleString('en-IN')}`,
    html,
  });
}
