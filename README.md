# RKR Epsilon website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rkrepsilon/v0-rkr-epsilon-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/Dwd1IlKo1Yh)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Multilingual Support

This application supports **English** and **German** with localized URLs:

### URL Structure
- **English**: `/en/about-us`, `/en/services`, `/en/contact`
- **German**: `/de/ueber-uns`, `/de/dienstleistungen`, `/de/kontakt`

### Key Features
- **Dynamic routing** with `[locale]/[slug]/page.tsx`
- **Translation files** in `messages/en.json` and `messages/de.json`
- **Slug mapping** in `config/slugs.ts` for localized URLs
- **Language switcher** component in the navigation
- **next-intl** for internationalization

### Adding New Translations
1. Add new keys to `messages/en.json` and `messages/de.json`
2. Use `useTranslations()` hook in components
3. Update `config/slugs.ts` if adding new pages with localized URLs

## Deployment

Your project is live at:

**[https://vercel.com/rkrepsilon/v0-rkr-epsilon-website](https://vercel.com/rkrepsilon/v0-rkr-epsilon-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/Dwd1IlKo1Yh](https://v0.app/chat/projects/Dwd1IlKo1Yh)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
