export default function SalesDashboardDemo() {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 24 }}>
      <h3 style={{ margin: 0 }}>Sales Dashboard (Interactive)</h3>
      <p style={{ color: '#888', margin: '4px 0 12px 0' }}>Tableau/Plotly/Excel</p>
      <div style={{ background: '#f5f5f5', height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, color: '#bbb' }}>
        [Embed dashboard here]
      </div>
      <button style={{ marginTop: 16, padding: '8px 20px', borderRadius: 6, border: '1px solid #ccc', background: '#fafafa', cursor: 'pointer' }}>View Dashboard</button>
    </div>
  );
} 