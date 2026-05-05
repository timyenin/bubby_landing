import { Resend } from 'resend';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultToEmail = 'Tim.yenin@gmail.com';
const defaultFromEmail = 'Bubby Waitlist <onboarding@resend.dev>';

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    let body;

    try {
      body = await readJsonBody(req);
    } catch {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const company = typeof body.company === 'string' ? body.company.trim() : '';

    if (company) {
      return res.status(200).json({ ok: true });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'Email failed to send.' });
    }

    const timestamp = new Date().toISOString();
    const messageLines = [
      'bubby!',
      `submitted email: ${email}`,
      name ? `submitted name: ${name}` : null,
      `submitted timestamp: ${timestamp}`,
    ].filter(Boolean);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.WAITLIST_FROM_EMAIL || defaultFromEmail,
      to: process.env.WAITLIST_TO_EMAIL || defaultToEmail,
      subject: 'you have me waiting for bubby!',
      text: messageLines.join('\n'),
      replyTo: email,
    });

    if (error) {
      return res.status(500).json({ error: 'Email failed to send.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('waitlist error:', error);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
