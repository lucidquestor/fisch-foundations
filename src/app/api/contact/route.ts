import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.firstName || !body?.lastName || !body?.email || !body?.details) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  // Wire up Resend, SendGrid, or Formspree here for production email delivery.
  // For now, log the inquiry server-side so Vercel function logs capture it.
  console.info("[contact inquiry]", {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone ?? "",
    projectType: body.projectType ?? "",
    details: body.details,
  });

  return NextResponse.json({ ok: true });
}
