"use client";

import React, { useEffect, useState } from "react";

// Import certificate metadata from JSON
// We'll use dynamic import for Next.js compatibility


export default function Certifications() {
  const [certificates, setCertificates] = useState<any[]>([]);

  useEffect(() => {
    import("../../data/certificates.json")
      .then((mod) => setCertificates(mod.default || mod))
      .catch(() => setCertificates([]));
  }, []);

  // Group by provider
  const grouped = certificates.reduce((acc: Record<string, any[]>, cert: any) => {
    const provider = cert.provider || "Other";
    if (!acc[provider]) acc[provider] = [];
    acc[provider].push(cert);
    return acc;
  }, {} as Record<string, any[]>);

  // Featured certificates
  const featured = certificates.filter((c) => c.featured);

  return (
    <section id="certifications" style={{ marginBottom: 64 }}>
      <h2 style={{ color: '#b38b00' }}>Certifications</h2>
      <div style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}>
      </div>

      {/* Featured Certificates */}
      {featured.length > 0 && (
        <>
          <h3 style={{ color: '#b38b00', marginTop: 40 }}>Featured Certificates</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr', // Show each featured certificate full width
            gap: 36,
            marginTop: 24,
            maxWidth: '100%',
            margin: '0 auto'
          }}>
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
          <div key={provider} style={{ marginTop: 48 }}>
            <h3 style={{ color: '#b38b00', marginBottom: 24 }}>{provider}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24
            }}>
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

function CertificateCard({ cert, featured }: { cert: any; featured?: boolean }) {
  // Determine thumbnail filename
  let thumbnail = cert.thumbnail;
  if (!thumbnail && cert.file) {
    thumbnail = cert.file.replace(/\.(pdf|mhtml)$/i, ".png");
  }
  const thumbPath = `/certificate_thumbnails/${encodeURIComponent(thumbnail)}`;
  const fallback = "/certificate_thumbnails/fallback.png"; // Place a fallback image in this location

  return (
    <div style={{ background: '#fffbe6', border: '1.5px solid #ffe066', borderRadius: 16, padding: featured ? 32 : 16, boxShadow: '0 2px 12px 0 rgba(255, 217, 102, 0.13)', margin: featured ? '0 auto' : undefined, maxWidth: featured ? '100%' : undefined }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 18 }}>
        <img
          src={thumbPath}
          alt={cert.name + " certificate thumbnail"}
          style={{ width: featured ? '961px' : 220, maxHeight: featured ? '100%' : 150, borderRadius: 12, boxShadow: '0 1px 12px 0 rgba(179,139,0,0.13)' }}
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
      {/* Placeholders for more metadata */}
      {cert.issueDate && <div style={{ color: '#b38b00', fontSize: '0.91rem', marginTop: 8 }}>Issued: {cert.issueDate}</div>}
      {cert.credentialId && <div style={{ color: '#b38b00', fontSize: '0.91rem' }}>ID: {cert.credentialId}</div>}
      {cert.description && <div style={{ color: '#444', fontSize: '0.97rem', marginTop: 6 }}>{cert.description}</div>}
    </div>
  );
}

