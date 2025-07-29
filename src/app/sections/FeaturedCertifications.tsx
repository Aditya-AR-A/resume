"use client";
import React, { useEffect, useState } from "react";
import { CertificateCard } from "../certifications/components/CertificateCard";
import { Certificate } from "@/types/certificates";

export default function FeaturedCertifications() {
  const [featured, setFeatured] = useState<Certificate[]>([]);
  useEffect(() => {
    import("../../data/certificates.json")
      .then((mod) => {
        const certs = (mod.default || mod) as Certificate[];
        setFeatured(certs.filter(c => c.featured));
      })
      .catch(() => setFeatured([]));
  }, []);
  if (featured.length === 0) return null;
  return (
    <section id="featured-certifications" style={{ margin: '56px 0 48px 0' }}>
      <h2 style={{ color: '#b38b00', marginBottom: 32 }}>Featured Certifications</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 36 }}>
        {featured.map(cert => (
          <CertificateCard key={cert.file} cert={cert} />
        ))}
      </div>
    </section>
  );
}
