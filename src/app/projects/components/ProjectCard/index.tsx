'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/projects';
import styles from './styles.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    id,
    name,
    type,
    shortDescription,
    thumbnail,
    skills,
    status,
    metrics,
    links,
    model,
    deployment,
    visualization,
    demo
  } = project;

  const typeClass = type.replace('-', '') as keyof typeof styles;
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return '🟢';
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🚧';
      case 'archived':
        return '📦';
      default:
        return '•';
    }
  };

  const renderModelInfo = () => {
    if (!model) return null;
    return (
      <div className={styles.modelInfo}>
        <div className={styles.modelTitle}>Model Information</div>
        <div className={styles.modelMetrics}>
          {model.metrics && Object.entries(model.metrics).map(([key, value]) => (
            <div key={key} className={styles.metric}>
              <div className={styles.metricValue}>{value}</div>
              <div className={styles.metricLabel}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVisualization = () => {
    if (!visualization) return null;
    return (
      <div className={styles.visualization}>
        {demo?.type === 'embedded' && (demo.powerbiEmbedUrl || demo.tableauEmbedUrl) && (
          <div className={styles.embedContainer}>
            <iframe
              src={demo.powerbiEmbedUrl || demo.tableauEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      {thumbnail && (
        <div className={styles.thumbnail}>
          <Image
            src={thumbnail}
            alt={`${name} thumbnail`}
            fill
            className={styles.thumbnailImage}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={`${styles.type} ${styles[typeClass]}`}>
            {type.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </div>
          <h3 className={styles.title}>{name}</h3>
          <div className={`${styles.status} ${styles[status]}`}>
            {getStatusIcon(status)} {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>

        <p className={styles.description}>
          {shortDescription || project.description}
        </p>

        <div className={styles.skills}>
          {skills.slice(0, 5).map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
          {skills.length > 5 && (
            <span className={styles.skill}>+{skills.length - 5}</span>
          )}
        </div>

        {metrics && metrics.length > 0 && (
          <div className={styles.metrics}>
            {metrics.map((metric, index) => (
              <div key={index} className={styles.metric}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {renderModelInfo()}
        {renderVisualization()}

        {deployment?.status === 'active' && demo?.type === 'interactive' && (
          <Link href={demo.url || ''} className={styles.demoButton}>
            Try Live Demo
          </Link>
        )}

        <div className={styles.links}>
          {links && Object.entries(links).map(([key, url]) => {
            if (!url) return null;
            return (
              <Link
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            );
          })}
          <Link href={`/projects/${id}`} className={styles.link}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
