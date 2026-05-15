import type { ResumeData } from '../i18n/types'

export const resumeData: ResumeData = {
  name: '張哲銓',
  nameAlt: 'Jesper',
  title: 'Full-Stack Developer & SaaS Builder',
  email: 'h7110231@gmail.com',
  portfolio: 'https://leadionai.zeabur.app/',
  linkedin: 'https://linkedin.com/in/jesper-chang',

  about: [
    '前端組長 × 獨立產品開發者。日間於網際威信主導富邦企業網銀現代化重構與上海銀行 B2B 系統交付，熟悉金融級嚴謹的資安規範與多輪測試流程；下班後獨立設計、開發並營運自家產品。',
    '個人代表作 Leadion AI — AI 驅動數位行銷 SaaS,整合 Google Gemini / Veo3、自建影片佇列與 API Key Pool 支撐 60 並發、串接藍新 NewebPay 金流,4 國市場上線。',
    '另一個個人作品「整知道（ScreenIdea）」已上架 App Store 並持續維運 — Next.js 16 + Capacitor 跨平台架構、Gemini 自動萃取截圖知識點、間隔重複學習機制,對標 Readwise / RemNote。從 iOS IAP 訂閱、APNS 推播到 Sentry 監控全鏈路自己跑通。',
    '技術棧涵蓋 Angular / Vue 3 / React / Next.js（前端）、Node.js / Express / Prisma（後端）、Google Gemini / N8N（AI & 自動化）、Capacitor / Xcode / Android SDK（行動端）,習慣異步溝通與書面決策,遠端友善。',
  ],

  highlightSkills: ['Vue 3', 'TypeScript', 'Node.js', 'N8N', 'Google Gemini', 'PostgreSQL'],

  experience: [
    {
      company: 'Leadion AI',
      url: 'https://leadionai.zeabur.app/',
      role: '獨立開發者 — AI 驅動數位行銷 SaaS 平台',
      period: '2024 — 現在',
      highlights: [
        '獨立設計並開發完整 SaaS 平台,前端 27 頁面 / 50+ 元件,後端 35+ 路由 / 60+ 服務',
        '打造「極導預見」旗艦功能 — AI 合成用戶市場調查系統,支援 4 國市場、單次模擬 10~200 位虛擬受訪者,含交叉分析與視覺化報告',
        '整合 Google Gemini / Veo3 開發 AI 電商工具套件:商品去背、背景生成、文案生成、圖片增強、場景推薦、影片生成',
        '自建影片隊列管理系統（排隊、優先處理、取消、速率限制）,搭配 Gemini API Key Pool + Round-Robin 支撐 60 並發',
        '串接 N8N 自動化引擎 + Python 分析管道,整合 GA4 & Search Console 產出 SEO 優化報告',
        '串接藍新 NewebPay 金流,實作點數制計費系統(信用卡、超商代碼、銀行 ATM 多支付方式)',
        '建置完整管理後台:用戶管理、成本分析、使用量統計、錯誤報告、促銷碼與人格庫管理',
        '開發/測試/生產三環境自動部署（Zeabur + Git Push 觸發）,Redis 快取、JWT 認證、AI 智能調度',
      ],
      techs: ['Vue 3', 'TypeScript', 'Pinia', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Google Gemini', 'Veo3', 'N8N', 'Zeabur'],
    },
    {
      company: '整知道 ScreenIdea',
      url: 'https://apps.apple.com/tw/app/integrate-know/id6760764603',
      role: '獨立開發者 — 截圖知識管理 iOS App',
      period: '2025 — 現在',
      highlights: [
        '已上架 App Store 並持續維運的個人作品:截圖 → Gemini AI 萃取知識點 → 間隔重複學習,對標 Readwise / RemNote / Cubox / Anki',
        'Next.js 16 + React 19 + Capacitor 8 跨平台架構,iOS / Android / Web 同源,行動端含相機、推播、Haptics、Status Bar 原生整合',
        '整合 Apple App Store Server Library + APNS2 完成 IAP 訂閱與原生推播,串通完整商業化鏈路',
        '後端 Prisma 7 + Neon Postgres serverless、NextAuth 認證、AWS S3 圖片儲存、Sentry 錯誤監控',
        '產品涵蓋截圖管理、筆記、書籤、閱讀清單、時間軸、知識圖譜、主題分類、訂閱定價等 12+ 模組',
        '工程實踐:Vitest + Playwright + MSW 測試覆蓋、Husky pre-commit、TypeScript strict 模式',
        '視覺設計刻意脫離藍紫色 sans-serif 競品紅海,採 Editorial / Magazine 風格（Fraunces serif + 墨綠暖金）',
      ],
      techs: ['Next.js 16', 'React 19', 'TypeScript', 'Capacitor', 'iOS', 'Android', 'Prisma', 'Neon Postgres', 'Google Gemini', 'NextAuth', 'AWS S3', 'Sentry'],
    },
    {
      company: '網際威信',
      url: '#',
      role: '前端組長',
      period: '2023/06 — 現在',
      highlights: [
        '主導富邦企業網路銀行前端現代化重構,將 XML 混合式架構全面遷移至 Angular + TypeScript,負責畫面開發與後端 API 串接',
        '擔任 10 人開發團隊中的前端小組長,帶領 2 名組員,負責任務分配、Code Review 與進度控管',
        '獨立完成上海銀行 B2B 系統二階段功能開發,接手既有程式碼並交付新功能模組',
        '參與金融級系統開發,熟悉銀行業嚴謹的資安規範與測試流程',
      ],
      techs: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS/SCSS'],
    },
    {
      company: '帆晴股份有限公司',
      url: '#',
      role: '北區廣告 PM',
      period: '2022 — 2023/01',
      highlights: [
        '成功洽談吳淡如 Podcast 合作案,為廠商開拓新媒體曝光管道',
        '搶下中租集團網路投放廣告廠商資格,拓展重要企業客戶關係',
      ],
      techs: [],
    },
  ],

  skillCategories: [
    {
      category: '前端開發',
      icon: 'layout',
      skills: ['Vue 3', 'Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Pinia', 'RxJS', 'Tailwind CSS', 'HTML & CSS/SCSS'],
    },
    {
      category: '後端開發',
      icon: 'server',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST API Design'],
    },
    {
      category: 'AI / 自動化',
      icon: 'cpu',
      skills: ['Google Gemini', 'Veo3', 'N8N', 'LINE Bot', 'Telegram Bot', 'OpenClaw'],
    },
    {
      category: '行動端 / 跨平台',
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
    subtitle: 'AI 驅動數位行銷 SaaS 平台',
    url: 'https://leadionai.zeabur.app/',
    description:
      '獨立設計開發的完整 SaaS 平台,整合 AI 合成用戶市場調查、電商工具套件、SEO 分析等功能,從需求分析、架構設計到部署維運完整掌握產品全生命週期。',
    screenshot: '/leadion-screenshot.png',
    stats: [
      { value: 27, suffix: '+', label: '頁面' },
      { value: 50, suffix: '+', label: '元件' },
      { value: 35, suffix: '+', label: 'API 路由' },
      { value: 60, suffix: '', label: '並發支援' },
      { value: 4, suffix: '', label: '國市場' },
      { value: 6, suffix: '+', label: 'AI 工具' },
    ],
    techs: ['Vue 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Google Gemini', 'N8N', 'Zeabur'],
  },

  education: [
    {
      school: '持續自學中',
      degree: 'AI 工具與自動化技術',
      period: '2023 — 現在',
      description: '下班期間持續學習 OpenClaw 架設、Vibe Coding 等 AI 輔助開發技能',
    },
    {
      school: '資策會',
      degree: '前端與後端開發培訓課程',
      period: '2023/01 — 2023/06',
      description: '為期半年的密集培訓,每日下午至晚間於圖書室自學精進技術',
    },
  ],

  ui: {
    heroIntro: '你好,我是',
    heroDescriptionPrefix: '我打造從前端到後端的完整產品。目前獨立開發並營運 ',
    heroDescriptionSuffix: ' SaaS 平台,整合 AI、自動化與金流系統,服務跨國市場。',
    heroDescriptionLink: 'Leadion AI',
    heroCta: '與我聯繫',
    aboutTitle: '關於我',
    aboutSubheading: '以下是我近期主要使用的技術:',
    featuredTitle: '精選專案',
    featuredLabel: 'Featured Project',
    featuredViewProject: '查看專案',
    experienceTitle: '工作經歷',
    skillsTitle: '技術能力',
    educationTitle: '學習歷程',
    contactPrefix: '05. 接下來?',
    contactTitle: '與我聯繫',
    contactBody: '我目前正在尋找新的機會。無論你有任何問題、合作提案,或只是想打個招呼,我都很樂意收到你的來信!',
    contactCta: 'Say Hello',
    navLinks: [
      { num: '01.', label: '關於我', href: '#about' },
      { num: '02.', label: '專案', href: '#featured' },
      { num: '03.', label: '經歷', href: '#experience' },
      { num: '04.', label: '技能', href: '#skills' },
      { num: '05.', label: '聯繫', href: '#contact' },
    ],
    navResumeCta: '履歷 PDF',
    langToggleOther: 'EN',
    langToggleAriaLabel: '切換為英文',
  },
}
