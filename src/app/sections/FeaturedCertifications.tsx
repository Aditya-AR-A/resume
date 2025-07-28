"use client";
import React, { useEffect, useState } from "react";

function CertificateCard({ cert }: { cert: any }) {
  let thumbnail = cert.thumbnail;
  if (!thumbnail && cert.file) {
    thumbnail = cert.file.replace(/\.(pdf|mhtml)$/i, ".png");
  }
  const thumbPath = `/certificate_thumbnails/${encodeURIComponent(thumbnail)}`;
  const fallback = "/certificate_thumbnails/fallback.png";
  return (
    <div style={{ background: '#fffbe6', border: '1.5px solid #ffe066', borderRadius: 16, padding: 32, boxShadow: '0 2px 12px 0 rgba(255, 217, 102, 0.13)', margin: '0 auto', maxWidth: 700 }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 18 }}>
        <img
          src={thumbPath}
          alt={cert.name + " certificate thumbnail"}
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 1px 12px 0 rgba(179,139,0,0.13)' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallback;
          }}
        />
      </div>
      <div style={{ fontWeight: 700, color: '#b38b00', marginBottom: 6, fontSize: '1.09rem', wordBreak: 'break-word' }}>{cert.name}</div>
      <div style={{ color: '#997000', fontWeight: 500, fontSize: '0.98rem', marginBottom: 6 }}>{cert.field || <span style={{ color: '#ccc' }}>Field</span>}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
        {(cert.skills || []).map((skill: string) => (
          <span key={skill} style={{ background: '#ffe066', color: '#b38b00', borderRadius: 8, padding: '2px 8px', fontSize: '0.92rem', fontWeight: 600, border: '1px solid #ffe066' }}>{skill}</span>
        ))}
      </div>
      <div style={{ color: '#888', fontSize: '0.93rem', marginBottom: 10 }}>{cert.provider}</div>
      <a
        href={`/Cerificates/${encodeURIComponent(cert.file)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#997000', textDecoration: 'underline', fontWeight: 500, fontSize: '1.05rem' }}
      >
        View PDF
      </a>
      {cert.issueDate && <div style={{ color: '#b38b00', fontSize: '0.91rem', marginTop: 8 }}>Issued: {cert.issueDate}</div>}
      {cert.credentialId && <div style={{ color: '#b38b00', fontSize: '0.91rem' }}>ID: {cert.credentialId}</div>}
      {cert.description && <div style={{ color: '#444', fontSize: '0.97rem', marginTop: 6 }}>{cert.description}</div>}
    </div>
  );
}

export default function FeaturedCertifications() {
  const [featured, setFeatured] = useState<any[]>([]);
  useEffect(() => {
    import("../../data/certificates.json")
      .then((mod) => {
        const certs = mod.default || mod;
        setFeatured(certs.filter((c: any) => c.featured));
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
