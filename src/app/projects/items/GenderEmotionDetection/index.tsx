import Link from 'next/link';

export default function GenderEmotionDetection() {
  return (
    <div style={{
      background: '#fffbe6',
      border: '1.5px solid #ffe066',
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)'
    }}>
      <Link href="/projects/items/GenderEmotionDetection" style={{ textDecoration: 'none' }}>
        <h3 style={{ margin: 0, color: '#b38b00', cursor: 'pointer' }}>
          Gender, Nationality & Emotion Detection (Deep Learning)
        </h3>
      </Link>
      <ul style={{
        margin: '8px 0 0 18px',
        color: '#444',
        fontSize: '1.01rem',
        lineHeight: 1.6
      }}>
        <li>Developed CNN-based models for simultaneous detection of gender, nationality, and emotion from facial images, achieving 98%+ accuracy.</li>
      </ul>
    </div>
  );
} 
