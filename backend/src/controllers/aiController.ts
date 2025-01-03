import { Request, Response } from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getFinancialAdvice = async (req: Request, res: Response) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a knowledgeable financial advisor. Provide clear, actionable advice while being mindful of risks and individual circumstances. Always include disclaimers when appropriate."
        },
        {
          role: "user",
          content: query
        }
      ],
      model: "gpt-3.5-turbo",
    });

    const advice = completion.choices[0]?.message?.content;

    if (!advice) {
      throw new Error('No advice generated');
    }

    res.json({ advice });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate financial advice' });
  }
};