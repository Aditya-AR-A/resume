"use client";

import React, { useState, FormEvent, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

const AIAgent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) throw new Error('Failed to get a response from the AI agent.');

      const data = await response.json();
      const assistantMessage: Message = { sender: 'assistant', text: data.reply };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="agent" className="section py-8 px-4">
      <h2 className="text-2xl font-bold mb-2">AI Agent</h2>
      <p className="mb-4 text-gray-600 dark:text-slate-400">
        Ask my AI assistant about my skills, projects, or experience!
      </p>
      <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 shadow-lg rounded-lg p-4 flex flex-col gap-4">
        <div className="flex-1 h-80 overflow-y-auto space-y-2 mb-4 pr-2">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`inline-block px-4 py-2 rounded-lg text-sm max-w-xs break-words shadow ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-slate-800 dark:text-slate-100 text-gray-900'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-sm text-left text-gray-500 dark:text-slate-400">
              <i>Assistant is typing...</i>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AIAgent;
