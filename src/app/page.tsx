import styles from "./page.module.css";
import Intro from "./sections/Intro/Intro";
import FeaturedCertifications from "./sections/FeaturedCertifications";
import Jobs from "./jobs/Jobs";
import Projects from "./projects/Projects";
import Link from "next/link";

const navLinks = [
  { id: "intro", label: "Intro" },
  { id: "jobs", label: "Experience", href: "/jobs" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "certifications", label: "Certifications", href: "/certifications" },
];

const NAV_HEIGHT = 74; // px, adjust if needed

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Fixed, full-width navbar */}

      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href || `#${link.id}`}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navDownload}
          >
            Download Resume
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        <Intro />
        <section className={styles.preview}>
          <Jobs />
          <Link href="/jobs" className={styles.viewMore}>
            View All Experience
          </Link>
        </section>
        <section className={styles.preview}>
          <Projects />
          <Link href="/projects" className={styles.viewMore}>
            View All Projects
          </Link>
        </section>
        <section className={styles.preview}>
          <FeaturedCertifications />
          <Link href="/certifications" className={styles.viewMore}>
            View All Certifications
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Ad. All rights reserved.</span>
      </footer>
    </div>
  );
}
