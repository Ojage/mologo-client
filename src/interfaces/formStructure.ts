export interface ResumeData {
  selectedFile: File | any;
}

export interface Request4PlacementData {
  schoolAuth?: File | any;
  duration?: number;
  startDate?: Date;
  school?: string
}

export interface ContactDetailsData {
  legalName: string;
  address: string;
  email: string;
  town: string;
  primaryPhone: string;
  additionalEmail: string;
  website: string;
}

export interface HigherEducationData {
  school: string;
  degree: string;
  degreeStatus: string;
  country: string;
  major: string;
}

export interface WorkExperienceData {
  employerName: string;
  startDate: string;
  jobTitle: string;
  isCurrentJob: string;
  jobCountry: string;
  jobCity: string;
}

export interface SkillsData {
  skills: string;
}

export interface CoverLetterData {
  coverLetter: string;
}

export interface FormState {
  resumeData: ResumeData;
  request4PlacementData: Request4PlacementData
  contactDetailsData: ContactDetailsData;
  higherEducationData: HigherEducationData;
  workExperienceData: WorkExperienceData;
  skillsData: SkillsData;
  coverLetterData: CoverLetterData;
}