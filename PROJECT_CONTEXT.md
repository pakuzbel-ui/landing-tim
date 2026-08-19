# Project Context

This file preserves the working context from the previous Codex thread so we can continue the landing page work in this workspace.

## Source

- Previous Codex thread title: `Создай premium landing page`
- GitHub repository: `https://github.com/kalinevichtimur/landing`
- Restored local path: `/Users/kalinevichtimur/Documents/New project`
- Initial commit restored from GitHub: `4204318 Initial premium landing implementation`

## Product

Premium landing page for an agency team working with MelBet-related alternative payment solutions through the TeamCash agent model.

The product focus is:

- alternative deposits and withdrawals in the MelBet ecosystem
- agent network development
- TeamCash as the working product/model
- fast operations
- local regional expertise
- scalable agent and partner onboarding
- team support and trust

Target regions:

- Mongolia
- Tajikistan
- Uzbekistan
- Azerbaijan
- Turkmenistan
- Kyrgyzstan
- Afghanistan

## Site Goals

- Present the product and operating model
- Explain the agency model clearly
- Show reliability, speed, and regional expertise
- Attract agents
- Attract partners
- Create trust from the first screen
- Keep the content confident, concise, modern, and expert

## Visual Direction

The requested style was inspired by MelBet, but not copied one-to-one.

Design keywords:

- premium dark UI
- bright yellow accents
- fintech technology feeling
- sports drive
- cleaner and more modern than a direct reference
- strong first screen
- polished CTA buttons and advantage cards
- subtle borders
- glass / blur elements
- gradient glow
- animated section reveal
- strong responsive and mobile UX

Important later preference:

- Header/top bar should be non-transparent.
- Telegram icons should use the original Telegram blue color.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- Component-based structure
- Reusable UI components
- Site content and i18n data separated into data files

Current important files:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `data/i18n.ts`
- `lib/locale-provider.tsx`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/sections/*`
- `components/ui/*`

## Sections

The landing page was built around these sections:

- Header
- Hero
- About
- How it works
- Benefits
- Geography
- For Agents / For Partners
- Product Highlights
- FAQ
- Contact Form
- Footer

## Localization

The user requested professional localization, not literal machine translation.

Rules:

- Keep meaning, tone, and sales intent.
- Adapt to local language norms.
- Translate UI, CTA, cards, FAQ, and forms.
- Keep language switcher in the header on the right side.
- Selected language should persist.

Languages discussed/added:

- Russian
- English
- Mongolian
- Tajik
- Uzbek
- Azerbaijani
- Turkmen
- Kyrgyz
- Dari
- Pashto

Important language-specific note:

- Afghanistan should have separate Dari and Pashto.
- Dari should be written in Persian script.
- Pashto should be written in Pashto/Persian-based script.
- Mongolian should be in Cyrillic.

## Geography CTA

The user requested Telegram icons under each country in the Geography section.

Implemented direction:

- Add a Telegram icon/action at the bottom of each country card.
- It should feel like part of the card composition, not a random extra button.
- Telegram icon color should be original Telegram blue.

Relevant files:

- `components/sections/geography.tsx`
- `components/ui/icons.tsx`

## Previous Dev Notes

The project previously had recurring red-screen issues during local development caused by stale Next.js dev cache, not necessarily broken code.

Known fix when this happens:

1. Stop old dev process on port `3000`.
2. Delete `.next`.
3. Start `npm run dev` again.

Production build was checked after major changes.

## GitHub / Local State

The project was pushed to GitHub, then the local folder was intentionally cleaned at the user's request. It has now been restored from GitHub into:

`/Users/kalinevichtimur/Documents/New project`

Use this chat as the new main continuation thread.
