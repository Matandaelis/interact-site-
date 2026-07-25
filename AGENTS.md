# AI Agent Guidelines for Next.js App Router (UI, SEO, & AEO)

This document provides project-wide standards and guidelines for AI agents working on this Next.js application. Follow these principles to maintain code quality, UI craftsmanship, Search Engine Optimization (SEO), and Answer Engine Optimization (AEO).

---

## 1. Next.js App Router & Architecture

### Server vs. Client Components
- **Server Components by Default**: Keep pages and layout components as Server Components (`app/page.tsx`, `app/layout.tsx`) for optimal performance, fast initial load, and clean SEO indexability.
- **Client Components at Leaf Nodes**: Only add `'use client'` to dynamic, stateful UI components (forms, interactive accordions, animated motion sections).
- **Type Safety & Clean Imports**: Use top-level named imports for icons (`lucide-react`) and components.

---

## 2. UI & Design System Standards

### Anti-AI Slop & Visual Craft
- **Typography & Scale**: Pair crisp display typography with legible body fonts. Avoid monotonous sizes and ensure minimum body font size is 16px with line height between 1.5–1.7.
- **Color Contrast & Neutrals**: Utilize sophisticated dark/light palettes with high visual contrast. Avoid pure black `#000` or saturated glowing neon text.
- **Border & Spacing Rules**: Cap border-radii at 12–16px for standard cards and 24px+ for pill badges. Maintain proportional padding (`px-4 sm:px-6 lg:px-8`).
- **Motion & Micro-Interactions**: Use `framer-motion` for smooth scroll-triggered viewport transitions with standard cubic-bezier easing (`ease: [0.21, 0.47, 0.32, 0.98]`).
- **Accessibility**:
  - Touch targets MUST be at least 44px on mobile devices.
  - All interactive elements must include distinct `id` attributes and accessible `aria-*` labels.

---

## 3. SEO (Search Engine Optimization) Best Practices

### Metadata & OpenGraph
- **Export Page Metadata**: Define comprehensive `title`, `description`, `keywords`, `openGraph`, and `twitter` card objects in Server Page components or `layout.tsx`.
- **Heading Hierarchy**: Maintain strict sequential heading structures (`h1` -> `h2` -> `h3`). Never skip heading levels.
- **Image Optimization**:
  - Provide descriptive `alt` text for all visual assets and badges.
  - Use `referrerPolicy="no-referrer"` for external media hosts.

---

## 4. AEO (Answer Engine Optimization) & AI Search Standards

Answer Engine Optimization ensures AI agents, LLM search engines (Perplexity, Gemini, SearchGPT), and voice search tools accurately extract factual information about Inter-Act Research Associates (IARA).

### Entity & Knowledge Representation
- **Structured JSON-LD Schemas**: Embed rich Schema.org metadata (`Organization`, `Service`, `FAQPage`, `LocalBusiness`) in page headers.
- **Direct, Concise Snippets**: Ensure core descriptions begin with factual, standalone summary sentences answering *Who*, *What*, *Where*, and *How*.
- **Institutional Accuracy**: Explicitly highlight key legal registrations (e.g., *Kenyan Company's Act Cap 499 Section 4*), geographic scope (*Kenya, Uganda, Tanzania, Rwanda*), and leadership (*Executive Director Kennedy S. Okumu*).

---

## 5. Verification Workflow

Before completing any task:
1. Run `lint_applet` to check for syntax and type safety errors.
2. Run `compile_applet` to confirm the Next.js production build succeeds.
