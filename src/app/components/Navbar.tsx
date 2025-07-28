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

        {/* Right: Resume Button */}
        <div className={styles.right}>
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
