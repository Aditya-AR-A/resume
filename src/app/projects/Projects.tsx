import { useMemo } from 'react';
import projectsData from './projects.json';
import { Project } from '@/types/projects';
import { ProjectCard } from './components/ProjectCard';
import styles from './Projects.module.css';

function groupByCategory(projects: Project[]) {
  return projects.reduce((acc: Record<string, Project[]>, p) => {
    const cat = p.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  }, {});
}

export default function Projects() {
  const projects: Project[] = (projectsData as Project[]).filter((p) => p && p.name);
  const featured = useMemo(() => projects.filter(p => p.featured), [projects]);
  const grouped = useMemo(() => groupByCategory(projects.filter(p => !p.featured)), [projects]);

  return (
    <div className={styles.projectsPage}>
      {featured.length > 0 && (
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.featuredGrid}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>
      )}
      {Object.entries(grouped).map(([category, group]) => (
        <section key={category} className={styles.categorySection}>
          <h3 className={styles.sectionTitle}>{category}</h3>
          <div className={styles.projectsGrid}>
            {group.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
