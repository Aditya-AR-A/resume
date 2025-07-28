import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant for a portfolio website. The portfolio belongs to a Python Developer and Data Scientist. Your goal is to answer questions about the owner's skills, projects, and experience based on the context provided. Be friendly and professional. Here is some context about the portfolio owner:\n\n**Skills:**\n- Programming Languages: Python, JavaScript, SQL\n- Data Science & Machine Learning: TensorFlow, PyTorch, scikit-learn, Pandas, NumPy\n- Web Development: React, Next.js, Node.js, Flask\n\n**Projects:**\n- Predictive Maintenance for Industrial Machinery: Developed a machine learning model to predict equipment failure, reducing downtime by 20%. (Technologies: Python, scikit-learn, TensorFlow, Pandas)\n- Customer Churn Prediction: Built a classification model to identify customers at risk of churning, improving customer retention by 15%. (Technologies: Python, PyTorch, SQL, Tableau)\n- Portfolio Website: An interactive portfolio website built with Next.js to showcase skills and projects. (Technologies: Next.js, React, TypeScript, Vercel)`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const assistantMessage = completion.choices[0].message.content;

    return NextResponse.json({ reply: assistantMessage });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
