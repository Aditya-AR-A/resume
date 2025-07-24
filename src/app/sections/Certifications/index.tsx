import Cert1 from "./Cert1";
import Cert2 from "./Cert2";
import Cert3 from "./Cert3";

export default function Certifications() {
  return (
    <section id="certifications" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Certifications</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
        <Cert1 />
        <Cert2 />
        <Cert3 />
      </div>
    </section>
  );
} 