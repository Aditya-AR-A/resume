import Link from 'next/link';

export default function RealEstatePrice() {
  return (
    <div style={{
      background: '#fffbe6',
      border: '1.5px solid #ffe066',
      borderRadius: 16,
      padding: 24,
      marginBottom: 24,
      boxShadow: '0 2px 8px 0 rgba(255, 217, 102, 0.08)'
    }}>
      <Link href="/projects/items/RealEstatePrice" style={{ textDecoration: 'none' }}>
        <h3 style={{ margin: 0, color: '#b38b00', cursor: 'pointer' }}>
          Real Estate Price Prediction (ML)
        </h3>
      </Link>

      <ul style={{
        margin: '8px 0 16px 18px',
        color: '#444',
        fontSize: '1.01rem',
        lineHeight: 1.6
      }}>
        <li>Conducted EDA, data cleaning, and regression modeling to predict real estate prices, visualizing trends with Plotly and Seaborn.</li>
      </ul>

      <iframe
        src="/projects/real_estate/real_estate_plot.html"
        width="100%"
        height="480"
        style={{ border: "none", borderRadius: 12 }}
        title="Real Estate Price Chart"
      />
    </div>
  );
}
