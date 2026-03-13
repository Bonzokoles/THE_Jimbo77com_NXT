# 🤖 Karol Lissoń — AI Agent Engineer & Full Stack Developer
...existing code...
<p align="center">
  <a href="https://jimbo77.com"><strong>🌐 Portfolio</strong></a> •
  <a href="https://linkedin.com/in/karol-bonzo-lisson-543664229"><strong>💼 LinkedIn</strong></a> •
  <a href="mailto:JimBoZen@proton.me"><strong>📧 Kontakt</strong></a> •
  <a href="https://github.com/Bonzokoles"><strong>⚡ GitHub</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Open%20to%20Work-Remote-brightgreen?style=for-the-badge" alt="Open to Work">
  <img src="https://img.shields.io/badge/AI%20Agent%20Engineer-Expert-blue?style=for-the-badge" alt="AI Engineer">
  <img src="https://img.shields.io/badge/Cloudflare%20Workers-30%2B%20in%20Production-orange?style=for-the-badge&logo=cloudflare" alt="Cloudflare">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js">
</p>

---

## 👤 O mnie

Buduję produkcyjne systemy AI — od multi-agent orchestration przez RAG pipelines po edge computing na Cloudflare. Founder **JIMBO Inc**, gdzie projektuję i wdrażam autonomiczne systemy AI dla realnych klientów.

**Szukam zdalnej współpracy** jako AI Agent Engineer / Full Stack Developer.

---

## 🏆 Kluczowe osiągnięcia

| Projekt | Wynik |
|---|---|
| WHITECAT MOA (Meble Pumo) | **54x ROI** w 3 miesiące, 63 AI buying guides |
| mybonzo.com Platform | **30+ Workers**, 500K+ req/day, 99.97% uptime |
| RAG System (Meble Pumo) | **5000+ dokumentów** w ChromaDB, <2s latency |
| AI Models | Claude · GPT-4o · DeepSeek R1 · Bielik · Gemini · Ollama |
| Multi-Agent MOA | Claude + GPT-4o + DeepSeek R1 — intelligent routing |

---

## 🛠️ Stack

**AI/ML:** LangChain · LangGraph · RAG · ChromaDB · Ollama · Fine-tuning (LoRA) · MCP · Bielik · OpenAI · Claude API

**Backend:** Python · FastAPI · Flask · Node.js · TypeScript · Docker · Redis · PostgreSQL

**Frontend:** Next.js 15 · React 19 · Astro · Tailwind CSS · Three.js · Framer Motion · GSAP

**Cloud/Edge:** Cloudflare Workers · D1 · R2 · KV · Wrangler · Cloudflare Pages · Vercel

### ☁️ [MyBonzo.com Platform](https://mybonzo.com)
AI-native platforma na Cloudflare Edge: 30+ Workers, SOA architecture, RAG pipeline, AI Agent orchestrator. 500K+ req/day, 99.97% uptime.

### 🧠 WHITECAT MOA System
3-warstwowy multi-agent pipeline (DeepSeek R1 + Claude Sonnet + GPT-4o). 63 AI buying guides, **54x ROI** w 3 miesiące dla klienta e-commerce.

### 🔌 MCP Node System v2
TypeScript MCP server — tools, resources i prompts dla agentów AI. Direct workspace/DB/API access przez protokół MCP.

### 🎨 TH_e_ART_h_MAN
Offline AI Art Copilot — Flask + baza 902 artystów + Ollama local AI + Stable Diffusion prompt generation.

### ⚡ CHUCK Chatbot
AI chatbot dla branży przemysłowej — RAG + Google Gemini + Cloudflare Workers + schematy techniczne.

---

## 🧑‍💻 Nowe praktyki jakościowe

- **Automatyczne lintowanie/formatowanie:**
  - ESLint + Prettier (reguły Next.js, React, accessibility, import, hooks)
  - Kod formatowany i lintowany automatycznie przy commitach
- **Accessibility review:**
  - Web-design-reviewer, accessibility.agent.md
  - Alt-text, aria, kontrast, keyboard navigation
- **Optymalizacja obrazów:**
  - next/image, lazy loading, blur placeholders
  - Responsywność, szybkie ładowanie, SEO
- **Backup tasków:**
  - Workflow archiwizacji History/ToDo

---

## 📊 To repozytorium

Kod źródłowy **[jimbo77.com](https://jimbo77.com)** — portfolio zbudowane na:

- **Next.js 15** (App Router + Server Components)
- **TypeScript** strict mode
- **Tailwind CSS** + shadcn/ui
- **Three.js** / React Three Fiber — animacje 3D, fizyczny lanyar
- **GSAP** + Framer Motion — scroll effects, layout transitions
- **Cloudflare Pages** + Workers — deployment
- **i18n** (PL/EN) via `next-intl`

```bash
git clone https://github.com/Bonzokoles/THE_Jimbo77com_NXT.git
cd THE_Jimbo77com_NXT
npm install
cp .env.local.example .env.local  # NEXT_PUBLIC_GITHUB_USERNAME, WAKATIME_API_KEY
npm run dev   # http://localhost:3000
```

---

## 📬 Kontakt

**🟢 Otwarty na zdalne projekty i współpracę**

- **ProtonMail:** [JimBoZen@proton.me](mailto:JimBoZen@proton.me)
- **LinkedIn:** [karol-bonzo-lisson](https://linkedin.com/in/karol-bonzo-lisson-543664229)
- **GitHub:** [@Bonzokoles](https://github.com/Bonzokoles) · [@77Jimbo77](https://github.com/77Jimbo77)
- **Portfolio:** [jimbo77.com](https://jimbo77.com)

## R2 integration (Cloudflare Object Storage)

Aby serwować, uploadować i listować pliki w R2 bucket:
1. Dodaj binding do wrangler.toml:

```
[[r2_buckets]]
binding = "MY_R2"
bucket_name = "jimbo77com-assets"
preview_bucket_name = "jimbo77com-assets"
```

2. Utwórz API routes:
- `/api/r2/upload` (POST): upload pliku do R2
- `/api/r2/list` (GET): lista plików w R2
- `/api/r2/[key]` (GET): pobieranie pliku z R2

Przykład uploadu przez frontend:
```js
const formData = new FormData();
formData.append("file", fileInput.files[0]);
fetch("/api/r2/upload", { method: "POST", body: formData });
```

Przykład pobierania:
```html
<img src="/api/r2/ProjectPage1.webp" alt="ProjectPage1" />
```

Przykład listowania:
```js
fetch("/api/r2/list").then(res => res.json()).then(files => console.log(files));
```

Możesz przenieść większość ciężkich assetów do R2 i serwować je przez te endpointy.

<p align="right">(<a href="#-karol-lissoń--ai-agent-engineer--full-stack-developer">Powrót do góry</a>)</p>
