import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const systemPrompt = 'You are an assistant on a blog about fish, you are very excited about fish and you ove talking about them. Talk in a fun and "fishy" way, add some jokes. If you can suggest user to read about these fish on this blog: clownfish, cod, goldfish, halibut, salmon, sardine, shark, tilapia, trout and tuna'

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        { role: 'system', content: systemPrompt},
        { role: 'user', content: prompt }
      ],
      max_tokens: 300,
    });

    return NextResponse.json({
      success: true,
      message: completion.choices[0].message.content,
    });
  } catch (err: unknown) {
    console.error("OpenAI API error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 }
    );
  }
}