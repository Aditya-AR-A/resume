export interface Certificate {
  name: string;
  file: string;
  thumbnail?: string;
  provider: string;
  field: string;
  skills: string[];
  issueDate: string | null;
  credentialId: string | null;
  description?: string;
  featured?: boolean;
}

export interface GroupedCertificates {
  [provider: string]: Certificate[];
}

// Certificate data validation
export function isValidCertificate(cert: any): cert is Certificate {
  return Boolean(
    cert &&
    typeof cert.name === 'string' &&
    typeof cert.file === 'string' &&
    typeof cert.provider === 'string' &&
    typeof cert.field === 'string' &&
    Array.isArray(cert.skills) &&
    (cert.issueDate === null || typeof cert.issueDate === 'string') &&
    (cert.credentialId === null || typeof cert.credentialId === 'string') &&
    (cert.description === undefined || typeof cert.description === 'string') &&
    (cert.featured === undefined || typeof cert.featured === 'boolean')
  );
}

