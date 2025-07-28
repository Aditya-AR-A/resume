import styles from "./page.module.css";
import Intro from "./sections/Intro/Intro";
import Certifications from "./sections/Certifications";
import Jobs from "./sections/Jobs";
import Projects from "./projects/Projects";


const navLinks = [
  { id: "intro", label: "Intro" },
  { id: "jobs", label: "Jobs" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "certifications", label: "Certifications" },
];

const NAV_HEIGHT = 74; // px, adjust if needed

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Fixed, full-width navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          background: "transparent",
          zIndex: 100,
          borderBottom: "1.5px solid #ffe066",
          padding: "20px 0 18px 0",
          boxShadow: "0 2px 12px 0 rgba(255, 217, 102, 0)",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: 24,
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
            fontWeight: 600,
            fontSize: "1.15rem",
            letterSpacing: 0.5,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Download Resume Button */}
          <li>
            <a
              href="/resume.pdf"
              className="nav-link nav-download"
              download
              title="Download Resume"
              style={{
                background: "#b38b00",
                color: "#fff",
                border: "1.5px solid #b38b00",
                fontWeight: 700,
                boxShadow: "0 4px 16px 0 rgba(179, 139, 0, 0.10)",
                marginLeft: 12,
              }}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
      <div style={{ height: NAV_HEIGHT }}></div>
      <main
        className={styles.main}
        style={{ width: "100%", maxWidth: 800, margin: "0 auto", paddingTop: NAV_HEIGHT }}
      >
        <Intro />
        <Jobs />
        <Projects />
        <Certifications />
      </main>
      <footer className={styles.footer}>
        <span style={{ fontSize: "0.9rem" }}>&copy; {new Date().getFullYear()} Ad. All rights reserved.</span>
      </footer>
      {/* Smooth scroll behavior and nav-link hover effect */}
      <style>{`
        html { scroll-behavior: smooth; }
        .nav-link {
          display: inline-block;
          text-decoration: none;
          color: #b38b00;
          background: #fffbe6;
          border: 1.5px solid #ffe066;
          border-radius: 999px;
          padding: 8px 28px;
          margin: 0 2px;
          font-weight: 600;
          font-size: 1.08rem;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px 0 rgba(255, 217, 102, 0.08);
          transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s;
        }
        .nav-link:hover {
          color: #fff;
          background: #b38b00;
          border: 1.5px solid #b38b00;
          box-shadow: 0 4px 16px 0 rgba(179, 139, 0, 0.10);
        }
        .nav-download {
          background: #b38b00;
          color: #fff;
          border: 1.5px solid #b38b00;
          font-weight: 700;
          box-shadow: 0 4px 16px 0 rgba(179, 139, 0, 0.10);
        }
        .nav-download:hover {
          background: #997000;
          border: 1.5px solid #997000;
        }
          section[id] {
          scroll-margin-top: 108}px;
        }
      
      `}</style>
    </div>
  );
}
