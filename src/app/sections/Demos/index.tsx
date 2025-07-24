import ChessHelperDemo from "./ChessHelperDemo";
import SalesDashboardDemo from "./SalesDashboardDemo";

export default function Demos() {
  return (
    <section id="demos" style={{ marginBottom: 64 }}>
      <h2>Demos / Apps</h2>
      <div style={{ color: '#888', textAlign: 'center', marginTop: 32 }}>
        <ChessHelperDemo />
        <br />
        <SalesDashboardDemo />
      </div>
    </section>
  );
} 