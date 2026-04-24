export type NavItem = {
  id: string;
  label: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  education: {
    institution: string;
    degree: string;
    start: string;
  };
  contacts: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
};

export type Experience = {
  organization: string;
  location: string;
  period: string;
  title: string;
  bullets: string[];
};

export type OrganizationExperience = {
  organization: string;
  location: string;
  period: string;
  role: string;
  bullets: string[];
};

export type Project = {
  year: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  driveUrl?: string;
};

export type QaArtifact = {
  title: string;
  scope: string;
  summary: string;
  evidence: string[];
  testCaseUrl?: string;
  bugReportUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type CvData = {
  navItems: NavItem[];
  profile: Profile;
  experiences: Experience[];
  organizationalExperiences: OrganizationExperience[];
  qaArtifacts?: QaArtifact[];
  projects: Project[];
  skillGroups: SkillGroup[];
};
