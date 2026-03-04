import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  pain_point: string;
  tools?: string;
};

export const runtime = "nodejs";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.pain_point) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and pain point are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  if (formspreeEndpoint) {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "We could not send your request right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Form backend is not configured. Set FORMSPREE_ENDPOINT or RESEND_API_KEY + CONTACT_TO_EMAIL.",
      },
      { status: 500 }
    );
  }

  const html = `
    <h2>New ProxyClaw Lead</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
    <p><strong>Website:</strong> ${escapeHtml(payload.website || "-")}</p>
    <p><strong>Tools:</strong> ${escapeHtml(payload.tools || "-")}</p>
    <p><strong>Pain Point:</strong><br/>${escapeHtml(payload.pain_point).replace(/\n/g, "<br/>")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `New Book a Call Request: ${payload.name}`,
      html,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { ok: false, error: "We could not send your request right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
