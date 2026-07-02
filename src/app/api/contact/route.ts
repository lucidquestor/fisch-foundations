import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();
  const projectLocation = String(formData.get("projectLocation") ?? "").trim();

  if (!firstName || !lastName || !email || !details || !projectLocation) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const inquiry = {
    firstName,
    lastName,
    email,
    phone: String(formData.get("phone") ?? "").trim(),
    projectLocation,
    projectType: String(formData.get("projectType") ?? "").trim(),
    budgetRange: String(formData.get("budgetRange") ?? "").trim(),
    desiredStart: String(formData.get("desiredStart") ?? "").trim(),
    plansAvailable: String(formData.get("plansAvailable") ?? "").trim(),
    details,
  };

  const file = formData.get("plans");
  let attachment: { filename: string; content: Buffer } | undefined;

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "File must be 10 MB or smaller." },
        { status: 400 },
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    attachment = { filename: file.name, content: buffer };
  }

  const emailBody = [
    `Name: ${inquiry.firstName} ${inquiry.lastName}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Location: ${inquiry.projectLocation}`,
    `Project Type: ${inquiry.projectType || "Not specified"}`,
    `Budget: ${inquiry.budgetRange || "Not specified"}`,
    `Desired Start: ${inquiry.desiredStart || "Not specified"}`,
    `Plans Available: ${inquiry.plansAvailable || "Not specified"}`,
    "",
    "Project Details:",
    inquiry.details,
  ].join("\n");

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
    text: emailBody,
    attachments: attachment ? [attachment] : undefined,
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
