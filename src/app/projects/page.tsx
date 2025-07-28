"use client";
import { JSX, useEffect, useState } from "react";
import styles from "../page.module.css";
import { projectList } from "./index";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<JSX.Element[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const loaded = await Promise.all(
        projectList.map((p) =>
          p.component().then((mod) => {
            const Component = mod.default;
            return <Component key={p.name} />;
          })
        )
      );
      setProjects(loaded);
    }
    loadProjects();
  }, []);

  return (
    <div className={styles.page}>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem 0 1.5rem 0",
          color: "#b38b00",
          fontWeight: 700,
          fontSize: "2.8rem",
        }}
      >
        Projects
      </h1>
      <div>{projects}</div>
    </div>
  );
}
