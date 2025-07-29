"use client";

import React, { useEffect, useState } from "react";
import { Certificate, GroupedCertificates, isValidCertificate } from '@/types/certificates';
import styles from './Certifications.module.css';
import { CertificateCard } from './components/CertificateCard';

export default function Certifications() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    async function loadCertificates() {
      try {
        const mod = await import("../../data/certificates.json");
        const certs = mod.default || mod;
        const validCerts = certs.filter(isValidCertificate);
        setCertificates(validCerts);
      } catch (error) {
        console.error('Error loading certificates:', error);
        setCertificates([]);
      }
    }
    
    loadCertificates();
  }, []);

  // Group by provider with proper typing
  const grouped = certificates.reduce<GroupedCertificates>((acc, cert) => {
    const provider = cert.provider || "Other";
    if (!acc[provider]) acc[provider] = [];
    acc[provider].push(cert);
    return acc;
  }, {});

  // Featured certificates
  const featured = certificates.filter((c) => c.featured);

  return (
    <section id="certifications" className={styles.section}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.grid} />

      {/* Featured Certificates */}
      {featured.length > 0 && (
        <>
          <h3 className={styles.sectionTitle}>Featured Certificates</h3>
          <div className={styles.featuredGrid}>
            {featured.map(cert => (
              <CertificateCard key={cert.file} cert={cert} featured />
            ))}
          </div>
        </>
      )}

      {/* Grouped by Provider */}
      {Object.entries(grouped).map(([provider, certs]) => {
        const nonFeaturedCerts = certs.filter(c => !c.featured && !featured.some(f => f.file === c.file));
        if (nonFeaturedCerts.length === 0) return null;
        return (
          <div key={provider} className={styles.providerSection}>
            <h3 className={styles.providerTitle}>{provider}</h3>
            <div className={styles.providerGrid}>
              {nonFeaturedCerts.map(cert => (
                <CertificateCard key={cert.file} cert={cert} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

