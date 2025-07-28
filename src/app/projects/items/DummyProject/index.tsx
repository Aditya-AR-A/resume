import Link from 'next/link';

export default function DummyProject() {
  return (
    <div style={{
      background: '#fffbe6',
      border: '1.5px solid #ffe066',
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)'
    }}>
      <Link href="/projects/items/DummyProject" style={{ textDecoration: 'none' }}>
        <h3 style={{ margin: 0, color: '#b38b00', cursor: 'pointer' }}>
          Dummy Project
        </h3>
      </Link>
      <ul style={{
        margin: '8px 0 16px 18px',
        color: '#444',
        fontSize: '1.01rem',
        lineHeight: 1.6
      }}>
        <li>This is a placeholder project to demonstrate the layout and styling of a project card in your portfolio.</li>
        <li>You can replace this with a real project or use it as a template for future additions.</li>
      </ul>
    </div>
  );
}
