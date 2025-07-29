"use client";

import styles from "./Navbar.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "intro", label: "Intro", href: "/" },
  { id: "jobs", label: "Jobs", href: "/jobs" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "certifications", label: "Certifications", href: "/certifications" },
];

export default function Navbar() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>("light");

  // Detect system preference on mount
  React.useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      root.setAttribute("data-theme", stored);
    } else {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const sysTheme = mq.matches ? "dark" : "light";
      setTheme(sysTheme);
      root.setAttribute("data-theme", sysTheme);
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left: Home Icon */}
        <div className={styles.left}>
          <Link href="/" aria-label="Home" className={styles["home-icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 12 22 12 15" />
            </svg>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className={styles.center}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Theme Toggle + Resume Button */}
        <div className={styles.right}>
          <button
            className={styles.themeToggle}
            aria-label="Toggle theme"
            type="button"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m13.9 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>
            )}
          </button>
          <a
            href="/resume.pdf"
            download
            className={styles.resumeButton}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
