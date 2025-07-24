const skills = ["React", "Next.js", "Flutter", "AWS", "Azure", "Google Cloud", "VS Code Extensions"];

export default function WebCloud() {
  return (
    <div style={{ background: '#fffbe6', border: '1.5px solid #ffe066', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)' }}>
      <h3 style={{ margin: 0, color: '#b38b00' }}>Web / Cloud</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
        {skills.map(skill => (
          <span key={skill} style={{ background: '#ffd966', color: '#b38b00', borderRadius: 999, padding: '6px 18px', fontWeight: 600, fontSize: '1rem', border: '1.2px solid #ffe066', boxShadow: '0 1px 4px 0 rgba(255, 217, 102, 0.08)' }}>{skill}</span>
        ))}
      </div>
    </div>
  );
} 