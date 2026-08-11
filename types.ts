export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  problem?: string;
  built?: string[];
  impact?: string[];
  role?: string;
  tech: string[];
  link?: string;
  repoUrl?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  startDate?: string; // Format: MM-YYYY
  endDate?: string; // Format: MM-YYYY or "Present"
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  summary: string;
  achievements: string[];
  skills: string[];
  proofUrl?: string;
  proofLabel?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface CapabilitySkill {
  name: string;
  proofIds: string[]; // references PROOF_EVIDENCE keys
}

export interface CapabilityGroup {
  id: string;
  label: string;
  description: string;
  skills: CapabilitySkill[];
}

export interface ProofEvidence {
  context: string; // where it was used (project / role)
  detail: string; // what was actually done
}

export interface ContactLink {
  platform: string;
  handle: string;
  link: string;
}

export interface UserInfo {
  name: string;
  firstName: string;
  title: string;
  location: string;
  status: string;
  positioning: string;
  summary: string;
  bio: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}
