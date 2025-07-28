import styles from "../page.module.css";
import React from "react";

const navLinks = [
  { id: "intro", label: "Intro" },
  { id: "jobs", label: "Jobs" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "certifications", label: "Certifications" },
];

const NAV_HEIGHT = 74; // px, adjust if needed

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100vw",
        background: "#aaabe6",
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
              href={link.href ? link.href : `#${link.id}`}
              className="nav-link"
            >
              {link.label}
            </a>
          </li>
        ))}
        {/* Download Resume Button */}
        <li>
          <a
            href="/Aditya_Resume.pdf"
            download
            style={{
              background: "#ffe066",
              color: "#b38b00",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
              padding: "8px 20px",
              fontSize: "1.08rem",
              marginLeft: 16,
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 1.5px 8px 0 rgba(255, 217, 102, 0.13)",
              transition: "background 0.2s"
            }}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
