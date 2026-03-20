import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

export async function POST(request: NextRequest) {
  const { name, email, phone, eventType, eventDate, message } =
    await request.json();

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '—';

  const html = `
    <div style="background:#141110;color:#e5e0d8;font-family:Arial,sans-serif;padding:32px;border-radius:8px;max-width:600px">
      <h2 style="color:#C5922A;margin:0 0 8px">📬 New Contact Message</h2>
      <p style="color:#9a9a8a;margin:0 0 24px">A visitor has sent a message via the Contact form.</p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
        <tr><td style="padding:6px 0;color:#9a9a8a;width:130px">Name</td><td style="padding:6px 0;font-weight:bold">${name}</td></tr>
        <tr><td style="padding:6px 0;color:#9a9a8a">Email</td><td style="padding:6px 0;font-weight:bold"><a href="mailto:${email}" style="color:#C5922A">${email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#9a9a8a">Phone</td><td style="padding:6px 0;font-weight:bold">${phone}</td></tr>
        <tr><td style="padding:6px 0;color:#9a9a8a">Event Type</td><td style="padding:6px 0;font-weight:bold">${eventType || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#9a9a8a">Event Date</td><td style="padding:6px 0;font-weight:bold">${formattedDate}</td></tr>
      </table>

      <h3 style="color:#C5922A;margin:0 0 8px">Message</h3>
      <p style="background:#1e1b18;padding:16px;border-radius:6px;font-size:14px;line-height:1.6;margin:0">${message.replace(/\n/g, '<br>')}</p>

      <p style="margin:24px 0 0;color:#9a9a8a;font-size:12px">Reply directly to this email to respond to the client.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'The Flash Room Studio <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `📬 New Message from ${name} — ${eventType || 'General Enquiry'}`,
      html,
    });
  } catch (err) {
    console.error('Contact email failed:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
