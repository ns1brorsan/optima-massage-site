# Deployment Guide - Optima Massage

## Problem: Vit skärm vid deployment

När en React-app (SPA) deployeras och visar vit skärm beror det oftast på att servern inte är konfigurerad för Single Page Application routing.

### Vad är problemet?

React Router använder `BrowserRouter` som skapar "rena" URLs utan `#` (t.ex. `/tjanster`, `/kontakt`). När någon besöker `optimamassage.se/tjanster` direkt:

1. ❌ **Utan rätt konfiguration**: Servern letar efter en fil som heter "tjanster" → 404 → vit skärm
2. ✅ **Med rätt konfiguration**: Servern serverar `index.html` → React Router tar över → sidan laddas

## Lösningar per plattform

### GitHub Pages (rekommenderas EJ för SPA)

GitHub Pages har inte inbyggt stöd för SPA routing. Jag har lagt till en workaround med `404.html` som redirectar till `index.html`.

**Steg:**
1. Bygg projektet: `npm run build`
2. Deploya `dist` mappen till GitHub Pages
3. `404.html` och scriptet i `index.html` hanterar routing

**Notera:** Denna lösning är ett hack och kan ge sämre SEO.

### Netlify (REKOMMENDERAT) ✨

Netlify har perfekt stöd för SPA och jag har redan skapat `public/_redirects` filen.

**Steg:**
1. Skapa konto på [netlify.com](https://netlify.com)
2. Dra och släpp `dist` mappen efter build
3. Eller koppla GitHub repo för auto-deploy
4. I Netlify settings: 
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Koppla din domän `optimamassage.se` i Domain settings

**Custom domain i Netlify:**
- Domain management → Add custom domain
- Lägg till `optimamassage.se`
- Uppdatera DNS hos din domänleverantör:
  - A record: `75.2.60.5`
  - Eller CNAME: `[ditt-site].netlify.app`

### Vercel (OCKSÅ BRA)

Jag har skapat `vercel.json` för Vercel.

**Steg:**
1. Skapa konto på [vercel.com](https://vercel.com)
2. Importera GitHub repo eller drag-and-drop `dist`
3. Build settings görs automatiskt för Vite
4. Koppla domän i Project Settings → Domains

### Apache (.htaccess)

Om du använder traditionell webbhotell med Apache:

Skapa `.htaccess` i root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### CloudFlare Pages

**Steg:**
1. Skapa konto på CloudFlare
2. Pages → Create a project
3. Koppla GitHub repo
4. Build: `npm run build`, Output: `dist`
5. `_redirects` filen fungerar automatiskt

## Alternativ lösning: HashRouter

Om du inte kan konfigurera servern kan du byta till HashRouter (URLs blir då `/#/tjanster`):

I `src/App.tsx`, byt:
```tsx
import { BrowserRouter } from "react-router-dom";
// till:
import { HashRouter } from "react-router-dom";

// och använd HashRouter istället för BrowserRouter
<HashRouter>
  ...
</HashRouter>
```

⚠️ **Nackdel**: URLs blir mindre snygga (`/#/tjanster`) och sämre för SEO.

## Rekommendation

**Bästa valet:** Netlify eller Vercel
- Gratis för små sajter
- Automatisk HTTPS
- Perfekt SPA-stöd
- Enkel custom domain setup
- CI/CD från GitHub

## Testa lokalt

```bash
# Installera dependencies
npm install

# Utvecklingsserver
npm run dev

# Bygg för produktion
npm run build

# Förhandsgranska produktionsbygg
npm run preview
```

## Felsökning

Om sajten fortfarande är vit efter deployment:

1. **Öppna DevTools (F12)** och kolla Console för errors
2. **Kolla Network-fliken** - laddas alla filer?
3. **Verifiera att `dist/index.html` finns** efter build
4. **Kolla base path**: Se till att `base: "/"` i `vite.config.ts`
5. **Töm cache**: Hårt reload med Ctrl+Shift+R

## Kontakt

För hjälp med deployment, kontakta din webmaster eller se:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
