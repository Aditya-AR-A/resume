import Link from 'next/link';

export default function CopilotExtension() {
  return (
    <div style={{
      background: '#fffbe6',
      border: '1.5px solid #ffe066',
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)'
    }}>
      <Link href="/projects/items/CopilotExtension" style={{ textDecoration: 'none' }}>
        <h3 style={{ margin: 0, color: '#b38b00', cursor: 'pointer' }}>
          VS Code Copilot Extension
        </h3>
      </Link>
      <ul style={{
        margin: '8px 0 0 18px',
        color: '#444',
        fontSize: '1.01rem',
        lineHeight: 1.6
      }}>
        <li>Designed and implemented a VS Code extension integrating Copilot for intelligent code suggestions, supporting 16+ languages and frameworks.</li>
        <li>Enhanced developer experience with customizable autocompletion and intuitive UI, adopted by 500+ users.</li>
      </ul>
    </div>
  );
} 
