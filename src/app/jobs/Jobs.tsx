'use client';

import React, { useEffect, useState } from 'react';
import { Job, GroupedJobs, isValidJob } from '@/types/jobs';
import styles from './Jobs.module.css';
import { JobCard } from './components/JobCard';

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function loadJobs() {
      try {
        const mod = await import("../../data/jobs.json");
        const jobsData = mod.default || mod;
        const validJobs = jobsData.filter(isValidJob);
        setJobs(validJobs);
      } catch (error) {
        console.error('Error loading jobs:', error);
        setJobs([]);
      }
    }
    
    loadJobs();
  }, []);

  // Group by company with proper typing
  const grouped = jobs.reduce<GroupedJobs>((acc, job) => {
    const company = job.company;
    if (!acc[company]) acc[company] = [];
    acc[company].push(job);
    return acc;
  }, {});

  // Featured jobs
  const featured = jobs.filter((j) => j.featured);

  // Sort jobs within each company by start date (most recent first)
  Object.values(grouped).forEach(companyJobs => {
    companyJobs.sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  });

  return (
    <section id="jobs" className={styles.section}>
      <h2 className={styles.title}>Work Experience</h2>

      {/* Featured Jobs */}
      {featured.length > 0 && (
        <>
          <h3 className={styles.sectionTitle}>Featured Positions</h3>
          <div className={styles.featuredGrid}>
            {featured.map(job => (
              <JobCard key={job.id} job={job} featured />
            ))}
          </div>
        </>
      )}

      {/* Grouped by Company */}
      {Object.entries(grouped).map(([company, companyJobs]) => {
        const nonFeaturedJobs = companyJobs.filter(
          j => !j.featured && !featured.some(f => f.id === j.id)
        );
        if (nonFeaturedJobs.length === 0) return null;
        return (
          <div key={company} className={styles.companySection}>
            <h3 className={styles.companyTitle}>{company}</h3>
            <div className={styles.companyGrid}>
              {nonFeaturedJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
