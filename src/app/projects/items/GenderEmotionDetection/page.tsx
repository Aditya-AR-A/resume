import GenderEmotionDetection from "./index";

export default function GenderEmotionDetectionPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <GenderEmotionDetection />
      <section style={{ marginTop: 40, background: '#fffbe6', border: '1.5px solid #ffe066', borderRadius: 16, padding: 24 }}>
        <h4 style={{ color: '#b38b00', margin: 0 }}>Notebook Link</h4>
        <p style={{ color: '#444', margin: '12px 0 0 0' }}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#b38b00', textDecoration: 'underline' }}>
            Add your notebook link here
          </a>
        </p>
      </section>
    </div>
  );
}
