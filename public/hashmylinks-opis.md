# HashMyLinks — Serverless Link-in-Bio

> Alternatywa Linktree — bez kont, bez serwerów, bez limitów.

## Strona

**https://www.hashmylinks.com/**

## Lokalizacja kodu

`S:\hashmylinks`

## Czym jest HashMyLinks

Narzędzie do tworzenia stron profilu z linkami (jak Linktree), ale **w pełni bezserwerowe**.
Cała konfiguracja profilu jest zakodowana w **hashu URL** (Base64) — zero baz danych, zero backendu, zero kont użytkowników.

## Jak to działa

1. Otwierasz edytor na hashmylinks.com
2. Wypełniasz: imię, bio, avatar, linki, kolory, czcionki, tła
3. Aplikacja koduje dane do Base64 i generuje URL: `hashmylinks.com/#eyJuYW1l...`
4. Udostępniasz URL (opcjonalnie skrócony przez Bitly/TinyURL)
5. Odbiorca otwiera link → dane dekodowane client-side → profil renderuje się w przeglądarce

**Zero zapisu na serwerze — wszystko żyje w URL.**

## Funkcje / Właściwości

| Funkcja | Opis |
|---|---|
| **Profil** | Imię, bio, avatar (kształt: circle / rounded / square) |
| **Linki** | Nielimitowane, każdy z tytułem, URL i opcjonalnym tłem |
| **Motywy** | Per-element kolory + Google Fonts |
| **Tła** | Presety graficzne lub custom kolor (strona + przyciski) |
| **Upload obrazków** | Przez ImgBB (darmowe API) |
| **Live Preview** | Podgląd zmian w czasie rzeczywistym |
| **Share** | Kopiowanie wygenerowanego linku jednym kliknięciem |
| **SEO** | Sitemap, robots.txt, OG image, manifest |
| **Analityka** | Vercel Analytics + Speed Insights |

## Stack technologiczny

| Technologia | Wersja / Szczegóły |
|---|---|
| Next.js | 15 (Turbopack) |
| React | 19 |
| Tailwind CSS | + shadcn/ui + Radix UI |
| Formularze | React Hook Form + Zod |
| Ikony | Lucide React |
| Wykresy | Recharts |
| Obrazki | ImgBB API |
| Deploy | Vercel |

## Struktura projektu

```
src/
  app/
    page.tsx           — landing page
    edit/              — edytor profilu
    layout.tsx         — główny layout
    manifest.ts        — PWA manifest
    sitemap.ts         — sitemap
    robots.ts          — robots.txt
    opengraph-image.tsx — OG image generator
  components/
    editor-view.tsx        — widok edytora
    profile-view.tsx       — renderowanie profilu
    landing-view.tsx       — strona główna
    share-profile.tsx      — generowanie linku
    background-selector.tsx — wybór tła
    color-selector.tsx     — picker kolorów
    font-selector.tsx      — picker czcionek
    image-upload-button.tsx — upload obrazków
    image-selector.tsx     — wybór obrazków
    ui/                    — shadcn/ui komponenty
  hooks/                   — custom React hooks
  lib/                     — utility functions
```

## Komendy

```bash
npm install          # zależności
npm run dev          # dev server (port 9002, Turbopack)
npm run build        # production build
npm start            # production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

## Co warto zapamiętać

- **Architektura "state-in-URL"** — ciekawy pattern: cały stan aplikacji zakodowany w hashu URL, zero backendu
- **Gotowy produkt** — działa na hashmylinks.com, można używać od razu
- **Inspiracja** — pattern kodowania stanu w URL może się przydać w innych projektach (np. sharowalne konfiguracje, generatory stron)
- **shadcn/ui + Radix** — dobry przykład nowoczesnego UI stacku z Next.js 15

---

*Zapisano: 2026-03-08 | Źródło: S:\hashmylinks*
