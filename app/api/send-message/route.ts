import { Resend } from "resend";

const TO_EMAIL = "lucas.haladjian@gmail.com";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, who, message } = await req.json();

  if (!email || !who || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `Message depuis le portfolio — ${who}`,
    text: `De : ${who} (${email})\n\n${message}`,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
