import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function POST(req: Request) {
  const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
  const { who, email, message } = await req.json();

  if (!who || !email) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const { text } = await generateText({
    model: groq("llama-3.1-8b-instant"),
    prompt: `Tu es un assistant qui rédige des messages de contact professionnels et chaleureux en français.

Rédige un message écrit PAR ${who} (${email}), adressé À Lucas Haladjian (développeur front-end freelance).
L'expéditeur souhaite le contacter pour : ${message || "une prise de contact générale"}.

Règles :
- Le message est rédigé à la première personne, du point de vue de l'expéditeur
- Il s'adresse directement à Lucas (ex: "Bonjour Lucas,")
- Il exprime clairement le besoin ou l'intention de l'expéditeur
- Ton naturel, professionnel, concis (3-4 phrases max)
- Ne pas signer avec le nom ou l'email de l'expéditeur à la fin
- Ne pas commencer par "Objet:" ou des balises`,
  });

  return Response.json({ message: text });
}
