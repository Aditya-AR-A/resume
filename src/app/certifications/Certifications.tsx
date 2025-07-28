import React from "react";
import Cert1Summary from "./items/Cert1";

export default function Certifications() {
  return (
    <section id="certifications" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Certifications</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
        <Cert1Summary />
      </div>
    </section>
  );
}
