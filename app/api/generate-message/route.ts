import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const { email, who, reason } = await req.json();

  if (!email || !who || !reason) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const { text } = await generateText({
    model: groq("llama-3.1-8b-instant"),
    prompt: `Tu es un assistant qui rédige des messages de contact professionnels et chaleureux en français.

Génère un message de contact pour Lucas Haladjian, développeur front-end, à partir de ces informations :
- Email de l'expéditeur : ${email}
- Qui est l'expéditeur : ${who}
- Raison du contact : ${reason}

Le message doit être naturel, professionnel et concis (3-4 phrases max). Ne commence pas par "Objet:" ou des balises. Commence directement par la salutation.`,
  });

  return Response.json({ message: text });
}
