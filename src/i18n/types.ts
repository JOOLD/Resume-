export type Lang = 'zh' | 'en'

export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export interface FeaturedProjectStat {
  value: number
  suffix: string
  label: string
}

export interface ExperienceItem {
  company: string
  url: string
  role: string
  period: string
  highlights: string[]
  techs: string[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  description?: string
}

export interface FeaturedProjectData {
  name: string
  subtitle: string
  url: string
  description: string
  screenshot: string
  stats: FeaturedProjectStat[]
  techs: string[]
}

export interface NavLink {
  num: string
  label: string
  href: string
}

export interface UICopy {
  heroIntro: string
  heroDescriptionPrefix: string
  heroDescriptionSuffix: string
  heroDescriptionLink: string
  heroCta: string
  aboutTitle: string
  aboutSubheading: string
  featuredTitle: string
  featuredLabel: string
  featuredViewProject: string
  experienceTitle: string
  skillsTitle: string
  educationTitle: string
  contactPrefix: string
  contactTitle: string
  contactBody: string
  contactCta: string
  navLinks: NavLink[]
  navResumeCta: string
  langToggleOther: string
  langToggleAriaLabel: string
}

export interface ResumeData {
  name: string
  nameAlt: string
  title: string
  email: string
  portfolio: string
  linkedin: string
  about: string[]
  highlightSkills: string[]
  experience: ExperienceItem[]
  skillCategories: SkillCategory[]
  featuredProject: FeaturedProjectData
  education: EducationItem[]
  ui: UICopy
}
