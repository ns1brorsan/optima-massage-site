# Optima Massage - Professionell Massageterapi

En modern, produktionsredo webbplats för Optima Massage byggd med React, TypeScript, och Tailwind CSS.

## 🌟 Features

- **Responsiv design**: Perfekt anpassad för desktop, surfplatta och mobil
- **Mörkt läge**: Automatiskt och manuellt läge
- **SEO-optimerad**: Strukturerad data, meta-taggar och semantisk HTML
- **Tillgänglighet**: WCAG 2.1 AA-kompatibel
- **Prestanda**: Optimerad för snabb laddning (mål: Lighthouse 90+)
- **GDPR-kompatibel**: Integritetspolicy och cookie-hantering

## 📦 Teknisk Stack

- **Framework**: React 18 med TypeScript
- **Styling**: Tailwind CSS + shadcn/ui komponenter
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint med TypeScript

## 🚀 Kom igång

### Förutsättningar

- Node.js (v18 eller senare)
- npm eller yarn

### Installation

1. Klona repositoryt:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Installera dependencies:
```bash
npm install
```

3. Starta utvecklingsservern:
```bash
npm run dev
```

Webbplatsen öppnas nu på `http://localhost:8080`

## 📁 Projektstruktur

```
src/
├── assets/              # Bilder och statiska filer
├── components/          # Återanvändbara komponenter
│   ├── ui/             # shadcn/ui komponenter
│   ├── Navigation.tsx  # Huvudnavigering
│   ├── Footer.tsx      # Sidfot
│   ├── ServiceCard.tsx # Tjänstekort
│   └── ...
├── data/               # Data och innehåll
│   └── services.ts     # Tjänster och priser
├── hooks/              # Custom React hooks
├── pages/              # Sidkomponenter
│   ├── Index.tsx       # Startsida
│   ├── Services.tsx    # Tjänster & Priser
│   ├── About.tsx       # Om oss
│   ├── Contact.tsx     # Kontakt
│   └── ...
├── lib/                # Hjälpfunktioner
└── App.tsx             # Huvudapp med routing
```

## 🎨 Design System

Webbplatsen använder ett konsekvent design system definierat i `src/index.css` och `tailwind.config.ts`:

- **Färger**: Extraherade från logotypen (varma toner: orange, korall, gul)
- **Typografi**: Inter sans-serif
- **Komponenter**: Anpassade shadcn/ui komponenter
- **Animationer**: Mjuka fade-in och slide-up animationer

## 📝 Innehållshantering

### Uppdatera tjänster och priser

Redigera filen `src/data/services.ts` för att ändra:
- Tjänstebeskrivningar
- Priser
- Behandlingstider
- Fördelar och kontraindikationer

### Uppdatera kontaktinformation

Kontaktinformation finns på flera ställen:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- `index.html` (schema.org markup)

### Uppdatera öppettider

- `src/components/Footer.tsx`
- `index.html` (schema.org markup)

## 🌐 Deployment

### GitHub Pages

1. Uppdatera `vite.config.ts` med rätt base URL
2. Bygg projektet:
```bash
npm run build
```
3. Deploya `dist` mappen till GitHub Pages

### Netlify / Vercel / Cloudflare Pages

1. Koppla ditt GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🔒 Säkerhet

Webbplatsen implementerar följande säkerhetsåtgärder:
- HTTPS-tvingande (konfigureras på hosting-nivå)
- Content Security Policy headers
- Formulärvalidering på klientsidan
- Input sanitering
- Secure external links (rel="noopener noreferrer")

## 📊 SEO

Webbplatsen är optimerad för sökmotorer med:
- Semantisk HTML
- Meta-taggar för varje sida
- Schema.org strukturerad data (LocalBusiness/MedicalBusiness)
- Open Graph och Twitter Cards
- Sitemap.xml och robots.txt
- Optimerade bilder med alt-text

## ♿ Tillgänglighet

- Semantiska HTML-element
- ARIA-attribut där nödvändigt
- Fokusmarkeringar
- Hög kontrastnivå (WCAG AA)
- Skip-link för tangentbordsnavigering
- Formulär med tydliga felmeddelanden

## 🔧 Skript

- `npm run dev` - Starta utvecklingsserver
- `npm run build` - Bygg för produktion
- `npm run preview` - Förhandsgranska produktionsbygge
- `npm run lint` - Kör ESLint

## 📄 Licens

© 2025 Optima Massage. Alla rättigheter förbehållna.

## 📞 Support

För frågor eller support:
- E-post: info@optimamassage.se
- Telefon: +46 12 345 67 89
- Adress: Karlavägen 7, 114 24 Stockholm
