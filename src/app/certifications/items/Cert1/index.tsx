import React from "react";
import Link from "next/link";

export default function Cert1Summary() {
  return (
    <div style={{ background: '#fffbe6', border: '1.5px solid #ffe066', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)' }}>
      <h3 style={{ margin: 0, color: '#b38b00' }}>
        <Link href="/certifications/items/Cert1" style={{ color: '#b38b00', textDecoration: 'underline', cursor: 'pointer' }}>
          Master’s Certification in Data Science
        </Link>
      </h3>
      <div style={{ color: '#997000', fontWeight: 500, marginBottom: 8 }}>
        IBM & Simplilearn | 2023
      </div>
    </div>
  );
}
