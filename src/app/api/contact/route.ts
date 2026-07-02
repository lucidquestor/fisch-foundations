import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.firstName || !body?.lastName || !body?.email || !body?.details) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const inquiry = {
    firstName: String(body.firstName).trim(),
    lastName: String(body.lastName).trim(),
    email: String(body.email).trim(),
    phone: body.phone ? String(body.phone).trim() : "",
    projectType: body.projectType ? String(body.projectType).trim() : "",
    details: String(body.details).trim(),
  };

  if (!resend) {
    console.info("[contact inquiry — no RESEND_API_KEY]", inquiry);
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Fisch Foundations <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.firstName} ${inquiry.lastName}`,
    text: [
      `Name: ${inquiry.firstName} ${inquiry.lastName}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone || "Not provided"}`,
      `Project Type: ${inquiry.projectType || "Not specified"}`,
      "",
      "Project Details:",
      inquiry.details,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact email failed]", error);
    return NextResponse.json(
      { error: "Unable to send your inquiry. Please call us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
