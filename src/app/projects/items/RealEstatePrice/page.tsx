import Link from "next/link";
import RealEstatePrice from "./index";

export default function RealEstatePricePage() {
  return (
    <div style={{ maxWidth: "95%", margin: "0 auto", padding: 32 }}>
      <RealEstatePrice />
      <section
        style={{
          marginTop: 40,
          background: '#fffbe6',
          border: '1.5px solid #ffe066',
          borderRadius: 16,
          padding: 24
        }}
      >
        <h4 style={{ color: '#b38b00', margin: 0 }}>
          <Link href="https://colab.research.google.com/drive/1XdrINdSetdRp22WV6SnGdLWgVMMt7J-8?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#b38b00', textDecoration: 'underline' }}>
            Notebook
          </Link>
        </h4>

        <div style={{alignItems: "center", gap: 16, marginTop: 12 }}>
          <iframe
            src="/projects/real_estate/notebook.html"
            width="100%"
            height="1000"
            style={{ borderRadius: 8 }}
          />
        </div>
      </section>
    </div>
  );
}
