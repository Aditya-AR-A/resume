import styles from "./page.module.css";
import Intro from "./sections/Intro/Intro";
import FeaturedCertifications from "./sections/FeaturedCertifications";
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

      <main
        className={styles.main}
        style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
      >
        <Intro />
        <Jobs />
        <Projects />
        <FeaturedCertifications />
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
