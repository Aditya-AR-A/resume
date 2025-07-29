import { Certificate } from '@/types/certificates';
import Image from 'next/image';
import styles from './styles.module.css';
import { useMemo } from 'react';

interface CertificateCardProps {
  cert: Certificate;
  featured?: boolean;
}

export function CertificateCard({ cert, featured }: CertificateCardProps) {
  // Determine thumbnail filename
  const { thumbPath, fallback } = useMemo(() => {
    let thumbnail = cert.thumbnail;
    if (!thumbnail && cert.file) {
      thumbnail = cert.file.replace(/\.(pdf|mhtml)$/i, ".png");
    }
    return {
      thumbPath: `/certificate_thumbnails/${encodeURIComponent(thumbnail ?? "fallback.png")}`,
      fallback: "/certificate_thumbnails/fallback.png"
    };
  }, [cert.thumbnail, cert.file]);

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageContainer}>
        <Image
          src={thumbPath}
          alt={cert.name + " certificate thumbnail"}
          width={featured ? 961 : 220}
          height={featured ? 600 : 150}
          className={`${styles.image} ${featured ? styles.featured : ''}`}
          onError={() => {
            const imgElement = document.querySelector(`[alt="${cert.name} certificate thumbnail"]`) as HTMLImageElement;
            if (imgElement) imgElement.src = fallback;
          }}
        />
      </div>
      <div className={styles.title}>
        {cert.name}
      </div>
      <div className={styles.field}>
        {cert.field || <span className={styles.fieldPlaceholder}>Field</span>}
      </div>
      <div className={styles.skillsContainer}>
        {cert.skills.map((skill: string) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className={styles.provider}>
        {cert.provider}
      </div>
      <a
        href={`/Cerificates/${encodeURIComponent(cert.file)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewPdfLink}
      >
        View PDF
      </a>
      {cert.issueDate && (
        <div className={styles.issueDate}>
          Issued: {cert.issueDate}
        </div>
      )}
      {cert.credentialId && (
        <div className={styles.credentialId}>
          ID: {cert.credentialId}
        </div>
      )}
      {cert.description && (
        <div className={styles.description}>
          {cert.description}
        </div>
      )}
    </div>
  );
}
