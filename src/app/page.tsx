import styles from "./page.module.css";
import Intro from "./sections/Intro/Intro";
import Demos from "./sections/Demos";

const navLinks = [
  { id: "intro", label: "Intro" },
  { id: "demos", label: "Demos/Apps" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Top Navigation */}
      <nav style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.95)",
        zIndex: 10,
        borderBottom: "1px solid #eee",
        padding: "12px 0",
        marginBottom: 32,
      }}>
        <ul style={{
          display: "flex",
          gap: 32,
          listStyle: "none",
          justifyContent: "center",
          margin: 0,
          padding: 0,
          fontWeight: 500,
          fontSize: "1.05rem",
        }}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} style={{ textDecoration: "none", color: "#222", transition: "color 0.2s" }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main} style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
        <Intro />
        <Demos />
      </main>
      <footer className={styles.footer}>
        <span style={{ fontSize: "0.9rem" }}>&copy; {new Date().getFullYear()} Ad. All rights reserved.</span>
      </footer>
      {/* Smooth scroll behavior */}
      <style>{`
        html { scroll-behavior: smooth; }
        nav a:hover { color: #0070f3; }
      `}</style>
    </div>
  );
}
