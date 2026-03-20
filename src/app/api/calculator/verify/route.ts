import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface SelectedService {
  label: string;
  qty: number;
  price: number;
  unit: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, eventDate, phone, selectedServices, subtotal, gst, total } = body as {
    name: string;
    eventDate: string;
    phone: string;
    selectedServices: SelectedService[];
    subtotal: number;
    gst: number;
    total: number;
  };

  try {
    await notifyAdmin({ name, eventDate, phone, selectedServices, subtotal, gst, total });
  } catch (err) {
    console.error('Admin email failed:', err);
  }

  return NextResponse.json({ success: true });
}

async function notifyAdmin({
  name, eventDate, phone, selectedServices, subtotal, gst, total,
}: {
  name: string;
  eventDate: string;
  phone: string;
  selectedServices: SelectedService[];
  subtotal: number;
  gst: number;
  total: number;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');
  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—';

  if (!apiKey || !adminEmail) {
    console.warn('[ADMIN NOTIFY] RESEND_API_KEY or ADMIN_EMAIL not set. Skipping email.');
    console.log(`[ENQUIRY] Name: ${name} | Phone: +91${phone} | Event: ${formattedDate} | Total: ${fmt(total)}`);
    selectedServices.forEach((s) => console.log(`  • ${s.label} ×${s.qty} = ${fmt(s.price * s.qty)}`));
    return;
  }

  const resend = new Resend(apiKey);

  const serviceRows = selectedServices
    .map(
      (s) => `<tr>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a">${s.label}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a;text-align:center">${s.qty} ${s.unit}${s.qty > 1 ? 's' : ''}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #2a2a2a;text-align:right">${fmt(s.price * s.qty)}</td>
      </tr>`,
    )
    .join('');

  const html = `
    <div style="background:#141110;color:#e5e0d8;font-family:Arial,sans-serif;padding:32px;border-radius:8px;max-width:600px">
      <h2 style="color:#C5922A;margin:0 0 8px">📸 New Package Enquiry</h2>
      <p style="color:#9a9a8a;margin:0 0 24px">A visitor has submitted their details and requested a package estimate.</p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
        <tr>
          <td style="padding:6px 0;color:#9a9a8a;width:120px">Name</td>
          <td style="padding:6px 0;font-weight:bold">${name}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#9a9a8a">Phone</td>
          <td style="padding:6px 0;font-weight:bold">+91 ${phone}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#9a9a8a">Event Date</td>
          <td style="padding:6px 0;font-weight:bold">${formattedDate}</td>
        </tr>
      </table>

      <h3 style="color:#C5922A;margin:0 0 12px">Selected Services</h3>
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
            <td colspan="2" style="padding:8px 12px;color:#9a9a8a">Subtotal</td>
            <td style="padding:8px 12px;text-align:right;color:#9a9a8a">${fmt(subtotal)}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding:8px 12px;color:#9a9a8a">GST (18%)</td>
            <td style="padding:8px 12px;text-align:right;color:#9a9a8a">${fmt(gst)}</td>
          </tr>
          <tr style="background:#1e1b18">
            <td colspan="2" style="padding:12px;font-weight:bold;color:#C5922A">Estimated Total</td>
            <td style="padding:12px;font-weight:bold;color:#C5922A;text-align:right">${fmt(total)}</td>
          </tr>
        </tfoot>
      </table>

      <p style="margin:24px 0 0;color:#9a9a8a;font-size:12px">Please follow up with the client at your earliest convenience.</p>
    </div>
  `;

  await resend.emails.send({
    from: 'The Flash Room Studio <onboarding@resend.dev>',
    to: adminEmail,
    subject: `📸 New Enquiry — ${name} | ${formattedDate} | Est. ${fmt(total)}`,
    html,
  });
}
