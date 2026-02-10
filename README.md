
# 🚀 Karol Lissoń - Portfolio Kreatywne
### AI Engineer | Full Stack Developer | Tech Explorer

<br>

<p align="center">
  <a href="https://jimbo77.org"><strong>Live Preview</strong></a> |
  <a href="#-key-features"><strong>Funkcje</strong></a> |
  <a href="#-tech-stack"><strong>Stack Technologiczny</strong></a> |
  <a href="#-installation"><strong>Instalacja</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Three.js-Visuals-lightgrey?style=for-the-badge&logo=three.js" alt="Three.js">
  <img src="https://img.shields.io/badge/Tailwind-Styling-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/next--intl-i18n-red?style=for-the-badge" alt="i18n">
</p>

---

## 🌟 Overview

A production-ready, full-stack creative portfolio built to showcase high-level expertise in **Artificial Intelligence**, **Web Development**, and **Blockchain technology**. This isn't just a website; it's a high-performance interactive experience utilizing advanced 3D shaders, physics-based animations, and real-time data integration.

---

## 🛠 Tech Stack

### Frontend Architecture
* **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server Components).
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configuration.
* **Animations**: 
    * [GSAP](https://gsap.com/) for complex timeline-based scroll effects.
    * [Framer Motion](https://www.framer.com/motion/) for layout transitions and gesture-based UI.
* **3D Components**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei).

### Data & Services
* **Localization**: `next-intl` dla wsparcia Polski, Angielski i Indonezyjski.
* **External APIs**: 
    * **WakaTime API**: Dynamiczna wizualizacja statystyk kodowania.
    * **GitHub API**: Śledzenie wkładów i projektów w czasie rzeczywistym.
* **Type Safety**: Strict Mode TypeScript.

---

## 🚀 Key Features

### 🎮 Immersive 3D Experience
* **Interactive 3D Lanyard**: A physics-simulated 3D ID Card in the hero section that reacts to mouse movements.
* **Hyperspeed Backgrounds**: Custom shader-based warp effects for a futuristic Web3 aesthetic.
* **Particle Systems**: Dynamic background particles that enhance depth and interactivity.

### 📊 Professional Insights
* **Real-time Coding Stats**: Integrated WakaTime cards showing your top languages and coding activity.
* **Dynamic GitHub Metrics**: Live cards displaying repository stats and contributions.
* **Interactive Timeline**: A visual journey of your career at CPS Lab, HUMIC, and more.

### ⚡ Performance & UX
* **Wielojęzyczne (PL/EN/ID)**: Pełne wsparcie internacjonalizacji.
* **Smooth Scroll**: Płynne przewijanie bazowane na Lenis.
* **Theme Engine**: Tryb ciemny/jasny z niestandardowym efektem "Click Spark".
* **Responsive Architecture**: Pixel-perfect layouts dla mobile, tablet i desktop.

---

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Routes & API)
├── components/           # UI Component Library
│   ├── layout/           # Navbar, Footer, and Page Shells
│   ├── sections/         # Page sections (About, Stats, Experience)
│   ├── stats/            # GitHub & WakaTime API visualizations
│   ├── three/            # R3F / Three.js components (Lanyard, Scene3D)
│   └── ui/               # Reusable UI primitives (Buttons, Cards, Marquees)
├── data/                 # portfolio.ts (Central source of truth)
├── hooks/                # Custom React hooks (useScroll, useIsInView)
├── i18n/                 # Localization configuration
├── messages/             # Translation JSON files (EN/ID)
└── styles/               # Global CSS & Tailwind layers

```

---

## 💻 Installation

### Prerequisites

* **Node.js**: 18.17.0 or later
* **npm** or **yarn**

### Local Setup

1. **Clone the Repository**:
```bash
git clone https://github.com/Bonzokoles/jimbo77-blog.git
cd jimbo77-blog

```


2. **Install Dependencies**:
```bash
npm install

```


3. **Environment Variables**:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GITHUB_USERNAME=Bonzokoles
WAKATIME_API_KEY=your_wakatime_key

```


4. **Launch Development Server**:
```bash
npm run dev

```


Access at `http://localhost:3000`

---

## 🛡️ License

This project is licensed under the **MIT License**. Feel free to use it as a foundation for your own portfolio!

---

## 🤝 Kontakt

* **Email**: [karol.bonzo@yahoo.com](mailto:karol.bonzo@yahoo.com)
* **Proton Mail**: [JimBoZen@proton.me](mailto:JimBoZen@proton.me)
* **GitHub**: [@Bonzokoles](https://github.com/Bonzokoles)
* **Dev.to**: [karol_81a50ed396508bcffd7](https://dev.to/karol_81a50ed396508bcffd7)

<p align="right">(<a href="#-karol-lissoń---portfolio-kreatywne">Powrót do góry</a>)</p>
