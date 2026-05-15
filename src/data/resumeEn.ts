import type { ResumeData } from '../i18n/types'

export const resumeDataEn: ResumeData = {
  name: 'Jesper Chang',
  nameAlt: '張哲銓',
  title: 'Frontend Lead × Indie SaaS Builder',
  email: 'h7110231@gmail.com',
  portfolio: 'https://leadionai.zeabur.app/',
  linkedin: 'https://linkedin.com/in/jesper-chang',

  about: [
    'Frontend Lead by day, indie SaaS builder by night. At Geotrust Inc. I own the modernization rewrite of Fubon Bank enterprise online banking and delivered Bank of Shanghai B2B Phase 2 — banking-grade security cadence and multi-stage QA. After hours I solo-design, ship and operate my own products.',
    'Flagship: Leadion AI — an AI-driven digital marketing SaaS integrating Google Gemini + Veo3 with a custom video queue and API Key Pool sustaining 60 concurrent jobs. NewebPay payment integration, credit-based billing, live in 4 markets.',
    'Second product: ScreenIdea (整知道) — a screenshot-to-knowledge app live on the App Store. Next.js 16 + Capacitor 8 cross-platform (iOS / Android / Web from one codebase), Gemini-powered knowledge extraction with spaced-repetition learning. Wired Apple IAP + APNS2 push end-to-end myself.',
    'Stack: Angular / Vue 3 / React / Next.js (frontend), Node.js / Express / Prisma (backend), Google Gemini / N8N (AI & automation), Capacitor / Xcode / Android SDK (mobile). Async-fluent, written-decision oriented, remote-ready.',
  ],

  highlightSkills: ['Vue 3', 'TypeScript', 'Node.js', 'N8N', 'Google Gemini', 'PostgreSQL'],

  experience: [
    {
      company: 'Leadion AI',
      url: 'https://leadionai.zeabur.app/',
      role: 'Founder — AI-Driven Digital Marketing SaaS',
      period: '2024 — Present',
      highlights: [
        'Solo-built end-to-end SaaS — Vue 3 + TypeScript frontend (27 pages / 50+ components), Node.js + Express + PostgreSQL backend (35+ routes / 60+ services)',
        'Built flagship "Sense Vision" feature — AI synthetic-user market research supporting 4 markets, simulating 10–200 virtual respondents per run with cross-analysis and visualized reports',
        'Integrated Google Gemini + Veo3 to ship an AI e-commerce toolkit: background removal, scene generation, copywriting, image enhancement, scene recommendation, video generation',
        'Built custom video queue (priority, cancellation, rate-limiting) + Gemini API Key Pool with round-robin sustaining 60 concurrent jobs',
        'Integrated N8N automation + Python analytics pipeline with GA4 & Search Console to produce SEO optimization reports',
        'Integrated NewebPay payment gateway with credit-based billing (credit card, convenience store code, ATM transfer)',
        'Built full admin platform — user management, cost analytics, usage stats, error reports, promo codes, persona library',
        'Three-environment auto-deploy on Zeabur (dev / staging / prod), Redis caching, JWT auth, AI orchestration',
      ],
      techs: ['Vue 3', 'TypeScript', 'Pinia', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Google Gemini', 'Veo3', 'N8N', 'Zeabur'],
    },
    {
      company: 'ScreenIdea (整知道)',
      url: 'https://apps.apple.com/tw/app/integrate-know/id6760764603',
      role: 'Founder — Cross-platform Knowledge App',
      period: '2025 — Present',
      highlights: [
        'Live on the App Store with real IAP subscription revenue — screenshot → Gemini AI extraction → spaced-repetition learning, competing with Readwise / RemNote / Cubox / Anki',
        'Next.js 16 + React 19 + Capacitor 8 single codebase shipping iOS / Android / Web — with camera, push, haptics, status bar native integration',
        'Wired Apple In-App Purchase + App Store Server Library + APNS2 push end-to-end — real subscription billing in production',
        'Backend: Prisma 7 + Neon serverless Postgres, NextAuth, AWS S3 image storage, Sentry monitoring',
        '12+ product modules — screenshots, notes, bookmarks, reading list, timeline, knowledge graph, topics, subscription, admin',
        'Engineering: Vitest + Playwright + MSW test coverage, Husky pre-commit, TypeScript strict mode',
        'Editorial / magazine visual identity (Fraunces serif + dark green & warm gold) deliberately escaping the blue-sans-serif red ocean',
      ],
      techs: ['Next.js 16', 'React 19', 'TypeScript', 'Capacitor', 'iOS', 'Android', 'Prisma', 'Neon Postgres', 'Google Gemini', 'NextAuth', 'AWS S3', 'Sentry'],
    },
    {
      company: 'Geotrust Inc. (網際威信)',
      url: '#',
      role: 'Frontend Lead',
      period: 'Jun 2023 — Present',
      highlights: [
        'Owning the modernization rewrite of Fubon Bank enterprise online banking — XML hybrid legacy → Angular + TypeScript, end-to-end UI delivery + API integration',
        'Lead a team of 2 inside a 10-person org — own task allocation, code review, and delivery cadence',
        'Shipped Bank of Shanghai B2B platform Phase 2 features solo, picking up legacy code and delivering new modules',
        'Banking-grade engineering — work under bank security audits and multi-stage QA processes',
      ],
      techs: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS/SCSS'],
    },
    {
      company: 'Fanching Inc. (帆晴股份有限公司)',
      url: '#',
      role: 'Northern Region Ad PM',
      period: '2022 — Jan 2023',
      highlights: [
        'Closed Wu Dan-Ru Podcast partnership, opening a new media channel for advertiser clients',
        'Won Chailease Group as a digital advertising client, expanding key enterprise account relationships',
      ],
      techs: [],
    },
  ],

  skillCategories: [
    {
      category: 'Frontend',
      icon: 'layout',
      skills: ['Vue 3', 'Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Pinia', 'RxJS', 'Tailwind CSS', 'HTML & CSS/SCSS'],
    },
    {
      category: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST API Design'],
    },
    {
      category: 'AI / Automation',
      icon: 'cpu',
      skills: ['Google Gemini', 'Veo3', 'N8N', 'LINE Bot', 'Telegram Bot', 'OpenClaw'],
    },
    {
      category: 'Mobile / Cross-platform',
      icon: 'smartphone',
      skills: ['Capacitor', 'Apache Cordova', 'iOS (Xcode)', 'Android SDK', 'APNS Push', 'App Store IAP'],
    },
    {
      category: 'DevOps',
      icon: 'cloud',
      skills: ['Docker', 'Git', 'Zeabur', 'Sentry', 'Husky'],
    },
  ],

  featuredProject: {
    name: 'Leadion AI',
    subtitle: 'AI-Driven Digital Marketing SaaS',
    url: 'https://leadionai.zeabur.app/',
    description:
      'Solo-built end-to-end SaaS — AI synthetic-user market research, e-commerce AI toolkit, SEO analysis. Full ownership from requirements through architecture, deployment, and ongoing operations.',
    screenshot: '/leadion-screenshot.png',
    stats: [
      { value: 27, suffix: '+', label: 'Pages' },
      { value: 50, suffix: '+', label: 'Components' },
      { value: 35, suffix: '+', label: 'API Routes' },
      { value: 60, suffix: '', label: 'Concurrent' },
      { value: 4, suffix: '', label: 'Markets' },
      { value: 6, suffix: '+', label: 'AI Tools' },
    ],
    techs: ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Google Gemini', 'N8N', 'Zeabur'],
  },

  education: [
    {
      school: 'Self-directed Learning',
      degree: 'AI Tooling & Automation',
      period: '2023 — Present',
      description: 'After-hours practice on OpenClaw deployment, vibe coding, and AI-assisted development',
    },
    {
      school: 'Institute for Information Industry (資策會)',
      degree: 'Frontend & Backend Bootcamp',
      period: 'Jan 2023 — Jun 2023',
      description: 'Six-month intensive program; daily afternoon-to-evening self-study in the library to deepen technical foundation',
    },
  ],

  ui: {
    heroIntro: "Hi, I'm",
    heroDescriptionPrefix: 'I build end-to-end products from frontend to backend. Currently shipping ',
    heroDescriptionSuffix: ' — an AI-driven SaaS integrating AI, automation and payments across global markets.',
    heroDescriptionLink: 'Leadion AI',
    heroCta: 'Get in touch',
    aboutTitle: 'About Me',
    aboutSubheading: 'Recent tech I work with daily:',
    featuredTitle: 'Featured Project',
    featuredLabel: 'Featured Project',
    featuredViewProject: 'View Project',
    experienceTitle: 'Experience',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    contactPrefix: "05. What's next?",
    contactTitle: 'Get in touch',
    contactBody: "I'm currently exploring new opportunities. Whether you have a question, a collaboration in mind, or just want to say hi — I'd love to hear from you!",
    contactCta: 'Say Hello',
    navLinks: [
      { num: '01.', label: 'About', href: '#about' },
      { num: '02.', label: 'Project', href: '#featured' },
      { num: '03.', label: 'Experience', href: '#experience' },
      { num: '04.', label: 'Skills', href: '#skills' },
      { num: '05.', label: 'Contact', href: '#contact' },
    ],
    navResumeCta: 'Resume PDF',
    langToggleOther: '中',
    langToggleAriaLabel: 'Switch to Chinese',
  },
}
