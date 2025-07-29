export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location?: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  skills: string[];
  projectIds?: string[];
  links?: {
    company?: string;
    linkedin?: string;
    portfolio?: string;
  };
  featured?: boolean;
  documents?: {
    name: string;
    file: string;
  }[];
  images?: {
    name: string;
    file: string;
    description?: string;
  }[];
}

export type GroupedJobs = {
  [key: string]: Job[];
};

export function isValidJob(job: unknown): job is Job {
  return (
    typeof job === 'object' &&
    job !== null &&
    typeof (job as Job).id === 'string' &&
    typeof (job as Job).title === 'string' &&
    typeof (job as Job).company === 'string' &&
    typeof (job as Job).position === 'string' &&
    typeof (job as Job).startDate === 'string' &&
    typeof (job as Job).description === 'string' &&
    Array.isArray((job as Job).skills) &&
    (job as Job).skills.every((skill: unknown) => typeof skill === 'string')
  );
}
