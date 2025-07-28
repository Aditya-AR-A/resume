import React from "react";
import Link from "next/link";

export default function Job1Page() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1 style={{ color: '#b38b00', fontSize: '2.2rem', marginBottom: 12 }}>AI & Data Science Intern</h1>
      <div style={{ color: '#997000', fontWeight: 600, marginBottom: 20, fontSize: '1.1rem' }}>
        Coding Pro | 06/2024 – 09/2024
      </div>
      <ul style={{ margin: '8px 0 24px 18px', color: '#444', fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li>Developed a feature-rich VS Code extension with Copilot integration, improving developer productivity by 20% through AI-driven code suggestions and autocompletion.</li>
        <li>Led Copilot integration and fine-tuning, achieving a 90% user satisfaction rate and reducing coding errors by 25%.</li>
        <li>Designed an intuitive UX, increasing feature adoption by 35% and supporting 16+ programming languages.</li>
      </ul>
      <Link href="/jobs" style={{ color: '#b38b00', textDecoration: 'underline', fontWeight: 500 }}>&larr; Back to Jobs</Link>
    </div>
  );
}
