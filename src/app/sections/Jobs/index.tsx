import Job1 from "./Job1";

export default function Jobs() {
  return (
    <section id="jobs" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Work Experience</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
        <Job1 />
      </div>
    </section>
  );
} 