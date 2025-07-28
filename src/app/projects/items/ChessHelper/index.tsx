import Link from 'next/link';

export default function ChessHelper() {
  return (
    <div style={{
      background: '#fffbe6',
      border: '1.5px solid #ffe066',
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)'
    }}>
      <Link href="/projects/items/ChessHelper" style={{ textDecoration: 'none' }}>
        <h3 style={{ margin: 0, color: '#b38b00', cursor: 'pointer' }}>
          Real-Time Chess Helper using YOLOv8
        </h3>
      </Link>
      <ul style={{
        margin: '8px 0 0 18px',
        color: '#444',
        fontSize: '1.01rem',
        lineHeight: 1.6
      }}>
        <li>Built a robust real-time chessboard state recognition system using YOLOv8, capable of detecting and classifying chess pieces from live camera feeds at over 30 FPS.</li>
        <li>Achieved 98.7% mAP@50 IoU on diverse chessboard configurations using advanced training techniques and a curated Kaggle dataset.</li>
        <li>Enabled automated gameplay analysis and integration with chess engines for move prediction and AR learning tools.</li>
      </ul>
    </div>
  );
} 
