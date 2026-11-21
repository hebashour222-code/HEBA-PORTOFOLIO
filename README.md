# Heba Ashour Ibrahim — Personal Portfolio Website
### موقع معرض الأعمال والسيرة المهنية — هبة عاشور إبراهيم

A complete, responsive, and production-ready portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an authentic, premium visual identity featuring warm ivory, deep espresso brown, and muted terracotta/orange accents, honoring verified professional credentials.

---

## 🌟 Professional Headline & Profile
- **Full Name**: Heba Ashour Ibrahim (هبة عاشور إبراهيم)
- **Role / Headline**: Digital Marketing Specialist & Marketing Strategist
- **Supporting Line**: Performance, Growth & Full-Funnel Marketing for B2B, Pharma & Manufacturing
- **Location**: Cairo, Egypt (القاهرة، مصر)
- **Email**: Hebashour222@gmail.com
- **LinkedIn**: [linkedin.com/in/heba-ashour-d](https://www.linkedin.com/in/heba-ashour-d/)
- **Education**: Bachelor of Pharmacy, Faculty of Pharmacy, Cairo University (2010 – 2015)
- **Current Organization**: El Mohandes Company | B&D Air Compressors Egypt
- **Industry**: Pharmaceutical Manufacturing, Industrial Solutions & B2B Marketing

---

## 🎨 Visual Identity & Design System
- **Ivory / Warm Creams**: `#FAF6F0`, `#FCFAF7`, `#F2EBE1` (Soft, elegant backdrops)
- **Deep Espresso Brown**: `#241812`, `#1C1410` (High-contrast, readable typography and structural elements)
- **Muted Terracotta / Warm Orange**: `#C85A32`, `#B44823`, `#FCE7DF` (Accent highlights, badges, and focus rings)
- **Bilingual & Directional Support**:
  - Arabic is the **default language** with native **RTL** (`dir="rtl"`) layout and optimized typography.
  - One-click language switch toggles seamlessly between **العربية (RTL)** and **English (LTR)**.
- **Accessibility & UX**:
  - Semantic HTML5 landmarks (`header`, `main`, `section`, `nav`, `footer`).
  - Keyboard focus states (`focus-visible:ring-2 focus-visible:ring-[#C85A32]`).
  - Respects `@media (prefers-reduced-motion: reduce)`.
  - Zero horizontal overflow on mobile, tablet, and widescreen displays.
  - No random stock photos, fake testimonials, or invented percentage metrics.

---

## 📂 Project Structure & Real Assets

```text
├── app/
│   ├── globals.css           # Direction-aware styles, warm color vars & typography
│   ├── layout.tsx            # Metadata, OpenGraph, viewport, font configs, LanguageProvider
│   └── page.tsx              # Assembled single-page application
├── components/
│   ├── Navbar.tsx            # Sticky header, logo, navigation links, mobile drawer & language switcher
│   ├── Hero.tsx              # Name, headline, verified portrait, metadata badges & CTAs
│   ├── About.tsx             # 4 pillars (Pharmacy, Manufacturing, Marketing, AI) & brand graphic modal
│   ├── Skills.tsx            # 6 verified skill categories with no fake percentages
│   ├── Projects.tsx          # Case study cards, PDF viewer links, image lightbox & status badges
│   ├── Services.tsx          # Strategic offerings based on demonstrated B2B & pharma work
│   ├── Education.tsx         # Cairo University, DEPI track, and MCIT/Microsoft AI Literacy certificate
│   ├── Contact.tsx           # Direct email copy button, mailto, LinkedIn link & resume download card
│   └── Footer.tsx            # Navigation links, back-to-top button & verified copyright
├── context/
│   └── LanguageContext.tsx   # React Context handling Arabic/English state & HTML dir
├── lib/
│   └── content.ts            # Bilingual content dictionary strictly bound to verified facts
├── public/
│   ├── favicon.svg           # Custom monogram favicon
│   └── assets/
│       ├── profile/          # heba-ashour.jpeg (Official portrait headshot)
│       ├── brand/            # heba-ashour-brand.jpeg (Personal branding infographic)
│       ├── certificates/     # ai-literacy-mcit-microsoft.jpeg (Verified MCIT & Microsoft certificate)
│       ├── cv/               # Heba_Ashour_Resume.pdf (Official resume)
│       └── projects/
│           ├── bnd/          # BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027.pdf + 7 visual posts
│           ├── ghost-el-mohandes/ # Ghost_El_Mohandes_30_Day_Content_Strategy.pdf + 7 visual posts
│           ├── go-align/     # (Directory ready for 5 social posts)
│           └── zirex/        # (Directory ready for SMS/push campaign files)
├── tailwind.config.ts        # Custom Tailwind configuration with ivory, brown, and terracotta palettes
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration with path alias @/*
└── package.json              # Project dependencies and scripts
```

---

## 🛠️ Verification & Work Sample Status

| Work Sample / Deliverable | Status in Project Assets | Details |
|---|---|---|
| **B&D Air Compressor Egypt / El Mohandes Company** | ✅ **Verified Assets Available** | 102-page Complete Strategy Document (PDF) + 7 social media post visuals. |
| **Ghost El Mohandes** | ✅ **Verified Assets Available** | 14-page Executive 30-Day Content Strategy (PDF) + 7 product post visuals. |
| **Go Align** | ⏳ **Assets Pending Upload** | Clearly marked with placeholder badge; scope describes 5 social media posts. |
| **ZIREX** | ⏳ **Assets Pending Upload** | Clearly marked with placeholder badge; scope describes audience personas and SMS/push planning. |
| **AI Literacy Credential** | ✅ **Verified Certificate** | MCIT, Microsoft & Fast Lane Certificate of Completion (June 2026). |
| **DEPI Digital Marketing Track** | ℹ️ **Track Participant** | Accurately presented as a specialized professional training track without claiming completion. |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: Version 18.17+ or 20+ (Node.js LTS is installed at `C:\Users\STAR BUSINESS\AppData\Local\Programs\nodejs` on this environment).
- **npm** or **pnpm**.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 4. Build for Production
```bash
npm run build
```
This performs full TypeScript checking and generates optimized static pages.

### 5. Start Production Server
```bash
npm run start
```

---

## 🌐 Deploying to Production

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository. Vercel automatically detects Next.js settings.
4. Click **"Deploy"**.

### Deploying to Netlify
1. Connect your Git repository in the Netlify dashboard.
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 🔄 How to Replace Pending Placeholders
When you are ready to upload the real work samples for **Go Align** and **ZIREX**:

1. **For Go Align (5 social media posts)**:
   - Place your 5 post images (PNG or JPEG) into `public/assets/projects/go-align/` (e.g. `post-1.jpg`, `post-2.jpg`, etc.).
   - In `lib/content.ts`, locate `id: "go-align"`.
   - Update `status: "verified"`, and add the `images` array with the file paths.

2. **For ZIREX (SMS/Push planning and personas)**:
   - Place your planning document or visual mockups into `public/assets/projects/zirex/`.
   - In `lib/content.ts`, locate `id: "zirex"`.
   - Update `status: "verified"`, and add `pdfFile` or `images` paths.

3. **Updating the Resume or Photo**:
   - Replace `public/assets/cv/Heba_Ashour_Resume.pdf` with your latest resume version.
   - Replace `public/assets/profile/heba-ashour.jpeg` if you ever wish to update your portrait.

---

## 🔒 Security & Privacy Notice
This website does not contain private passwords, secret API keys, or undisclosed personal telephone numbers. All communication is routed transparently through your official email address and LinkedIn profile.
