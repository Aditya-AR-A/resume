"use client";
import { JSX, useEffect, useState } from "react";
import { projectList } from "./index";

import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState<JSX.Element[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const loaded = await Promise.all(
        projectList.slice(0, 5).map((p) =>
          p.component().then((mod) => {
            const Component = mod.default;
            return (
              <div key={p.name}>
                <Link href={`/projects/items/${p.name.toLowerCase()}`} style={{ textDecoration: "none" }}>
                  <h3 style={{ margin: 0, color: "#b38b00", cursor: "pointer" }}>{p.name}</h3>
                </Link>
                <Component />
              </div>
            );
          })
        )
      );
      setProjects(loaded);
    }
    loadProjects();
  }, []);

  return (
    <div>
      {projects}
      <div style={{ textAlign: "center", margin: "24px 0 0 0" }}>
        <Link href="/projects" style={{
          padding: "10px 24px",
          background: "#ffe066",
          color: "#b38b00",
          borderRadius: 8,
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "1.1rem",
          border: "1.5px solid #ffe066",
          boxShadow: "0 2px 8px 0 rgba(255, 217, 102, 0.08)",
          transition: "background 0.2s"
        }}>More Projects</Link>
      </div>
    </div>
  );
}
