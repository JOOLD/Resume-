export const resumeDataEn = {
  name: 'Jesper Chang',
  nameZh: '張哲銓',
  title: 'Frontend Lead × Indie SaaS Builder',
  email: 'h7110231@gmail.com',
  location: 'Taipei, Taiwan (GMT+8) · Open to Remote',

  links: {
    portfolio: 'https://joold.github.io/Resume-/',
    leadion: 'https://leadionai.zeabur.app/',
    screenidea: 'https://apps.apple.com/tw/app/integrate-know/id6760764603',
    github: 'https://github.com/JOOLD',
    linkedin: 'https://linkedin.com/in/jesper-chang',
  },

  summary:
    'Banking-grade frontend engineer by day, indie SaaS builder by night. Shipped two production products solo — Leadion AI live in 4 markets, ScreenIdea live on the App Store. Full-stack ownership from design to monetization. Async-fluent, written-decision oriented.',

  featured: [
    {
      name: 'Leadion AI',
      tagline: 'AI-Driven Digital Marketing SaaS · Solo-built · Production',
      badge: 'LIVE · 4 MARKETS',
      url: 'https://leadionai.zeabur.app/',
      bullets: [
        'Vue 3 + TypeScript frontend (27 pages / 50+ components), Node.js + Express + PostgreSQL backend (35+ routes / 60+ services)',
        'Custom video queue + Gemini API Key Pool sustaining 60 concurrent jobs across Veo3 video generation',
        'Three payment gateways (ECPay / PayNow / NewebPay), credit-based billing, live in 4 markets',
        'N8N automation + Python pipeline integrating GA4 & Search Console for SEO reporting',
      ],
      stack: 'Vue 3 · TypeScript · Node.js · PostgreSQL · Redis · Gemini · Veo3 · N8N · Zeabur',
    },
    {
      name: 'ScreenIdea (整知道)',
      tagline: 'Cross-platform Knowledge App · Live on App Store with real IAP revenue',
      badge: 'LIVE ON APP STORE',
      url: 'https://apps.apple.com/tw/app/integrate-know/id6760764603',
      bullets: [
        'Shipped iOS / Android / Web from a single Next.js 16 + React 19 + Capacitor 8 codebase — solo through the full App Store submission and approval cycle',
        'Apple In-App Purchase + App Store Server Library + APNS2 push wired end-to-end — real subscription billing in production, not sandbox demo',
        '12+ product modules (screenshots, notes, bookmarks, reading list, knowledge graph, search, subscription, admin) powered by Gemini extraction + spaced-repetition learning',
        'Production stack: Prisma 7 + Neon serverless Postgres + NextAuth + AWS S3 + Sentry; Vitest + Playwright + MSW + TypeScript strict mode',
      ],
      stack: 'Next.js 16 · React 19 · Capacitor 8 · TypeScript · Prisma · Neon Postgres · Gemini · NextAuth · App Store IAP · APNS2',
    },
  ],

  experience: [
    {
      company: 'Geotrust Inc. (網際威信)',
      role: 'Frontend Lead',
      period: 'Jun 2023 — Present',
      bullets: [
        'Owning the modernization rewrite of Fubon Bank enterprise online banking — XML legacy → Angular + TypeScript',
        'Shipped Bank of Shanghai B2B platform Phase 2 features end-to-end',
        'Lead a team of 2 inside a 10-person org; own task allocation, code review, and delivery cadence',
      ],
    },
    {
      company: 'Fanching Inc. (帆晴股份有限公司)',
      role: 'Northern Region Ad PM',
      period: '2022 — Jan 2023',
      bullets: [
        'Closed Wu Dan-Ru Podcast partnership and won Chailease Group as a digital advertising client',
      ],
    },
  ],

  skills: [
    { category: 'Frontend', items: 'Vue 3 · Angular · React · Next.js · TypeScript · Pinia · RxJS · Tailwind' },
    { category: 'Backend', items: 'Node.js · Express · PostgreSQL · Redis · Prisma · REST API design' },
    { category: 'AI / Automation', items: 'Google Gemini · Veo3 · N8N · LINE Bot · Telegram Bot' },
    { category: 'Mobile', items: 'Capacitor · Cordova · iOS (Xcode) · Android SDK · APNS · App Store IAP' },
    { category: 'DevOps / QA', items: 'Docker · Git · Zeabur · Sentry · Husky · Vitest · Playwright' },
  ],

  education: [
    { school: 'Institute for Information Industry (資策會)', degree: 'Frontend & Backend Bootcamp', period: 'Jan 2023 — Jun 2023' },
    { school: 'Self-directed', degree: 'AI tooling & automation (OpenClaw, vibe coding)', period: '2023 — Present' },
  ],
}
