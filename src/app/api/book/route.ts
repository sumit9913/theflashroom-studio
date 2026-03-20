import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

export async function POST(request: NextRequest) {
  const {
    name,
    email,
    phone,
    eventType,
    eventDate,
    eventLocation,
    guestCount,
    budget,
    requirements,
    referral,
  } = await request.json();

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '—';

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;color:#9a9a8a;width:160px">${label}</td><td style="padding:6px 0;font-weight:bold">${value || '—'}</td></tr>`;

  const html = `
    <div style="background:#141110;color:#e5e0d8;font-family:Arial,sans-serif;padding:32px;border-radius:8px;max-width:600px">
      <h2 style="color:#C5922A;margin:0 0 8px">📅 New Booking Request</h2>
      <p style="color:#9a9a8a;margin:0 0 24px">A visitor has submitted a booking request.</p>

      <h3 style="color:#C5922A;margin:0 0 12px">Client Details</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
        ${row('Name', name)}
        ${row('Email', `<a href="mailto:${email}" style="color:#C5922A">${email}</a>`)}
        ${row('Phone', phone)}
        ${row('How they found us', referral)}
      </table>

      <h3 style="color:#C5922A;margin:0 0 12px">Event Details</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
        ${row('Event Type', eventType)}
        ${row('Event Date', formattedDate)}
        ${row('Location', eventLocation)}
        ${row('Guest Count', guestCount)}
        ${row('Budget Range', budget)}
      </table>

      ${
        requirements
          ? `
      <h3 style="color:#C5922A;margin:0 0 8px">Special Requirements</h3>
      <p style="background:#1e1b18;padding:16px;border-radius:6px;font-size:14px;line-height:1.6;margin:0 0 24px">${requirements.replace(/\n/g, '<br>')}</p>
      `
          : ''
      }

      <p style="margin:0;color:#9a9a8a;font-size:12px">Reply directly to this email to respond to the client.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'The Flash Room Studio <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `📅 Booking Request — ${name} | ${eventType} | ${formattedDate}`,
      html,
    });
  } catch (err) {
    console.error('Booking email failed:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send booking request' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
