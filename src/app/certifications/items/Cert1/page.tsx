import React from "react";
import Link from "next/link";

export default function Cert1Page() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1 style={{ color: '#b38b00', fontSize: '2.2rem', marginBottom: 12 }}>Master’s Certification in Data Science</h1>
      <div style={{ color: '#997000', fontWeight: 600, marginBottom: 20, fontSize: '1.1rem' }}>
        IBM & Simplilearn | 2023
      </div>
      <p style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: 24 }}>
        Completed a comprehensive 1-year program covering advanced topics in data science, machine learning, and AI. Acquired hands-on experience with Python, TensorFlow, and real-world projects.
      </p>
      <Link href="/certifications" style={{ color: '#b38b00', textDecoration: 'underline', fontWeight: 500 }}>&larr; Back to Certifications</Link>
    </div>
  );
}
