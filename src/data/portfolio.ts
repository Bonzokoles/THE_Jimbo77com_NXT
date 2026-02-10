import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Karol Lissoń',
        title: 'Eksplorator Technologii & Architekt AI',
        subtitle: 'Inżynier AI • Full Stack Developer • Entuzjasta Blockchain | Tworzę innowacyjne rozwiązania cyfrowe',
        bio: 'Pasjonat technologii z polskich lasów, specjalizujący się w Sztucznej Inteligencji, Full Stack Development i technologiach Web3. Tworzę zaawansowane rozwiązania łączące AI, blockchain i nowoczesny web development. Eksploruję granice możliwości AI Agents i zdecentralizowanych aplikacji.',
        avatar: '/about/karol-lisson.jpeg',
        location: 'Polska, W lesie',
        email: 'karol.bonzo@yahoo.com',
        phone: '',
        resumeUrl: '/resume.pdf',
        website: 'https://jimbo77.org',
        languages: [
            { name: 'Polski', level: 'Native' },
            { name: 'Angielski', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Bonzokoles',
                icon: 'github',
                username: 'Bonzokoles',
            },
            {
                platform: 'Dev.to',
                url: 'https://dev.to/karol_81a50ed396508bcffd7',
                icon: 'devto',
                username: 'karol_81a50ed396508bcffd7',
            },
            {
                platform: 'Email',
                url: 'mailto:JimBoZen@proton.me',
                icon: 'email',
                username: 'JimBoZen@proton.me',
            },
        ],
    },
    projects: [
        {
            id: 'project-1',
            title: 'Kreatywne Portfolio',
            description: 'Nowoczesne, animowane portfolio z elementami 3D i płynnymi animacjami.',
            longDescription: 'Profesjonalne portfolio stworzone aby zaprezentować zaawansowane umiejętności w dziedzinie Sztucznej Inteligencji, Blockchain i nowoczesnych architektur webowych. Platforma wykracza poza tradycyjne strony statyczne, oferując wydajne interaktywne doświadczenie napędzane zaawansowanymi shaderami WebGL, symulacjami fizycznymi i integracją danych w czasie rzeczywistym. Służy jako żywe laboratorium do eksperymentowania z najnowszymi technologiami frontendowymi przy zachowaniu ścisłych standardów dostępności i SEO.',
            image: '/assets/ProjectPage1.jpeg',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'GSAP'],
            tools: ['VS Code', 'Figma', 'GitHub'],
            status: 'completed',
            demoUrl: 'https://jimbo77.org',
            repoUrl: 'https://github.com/Bonzokoles/jimbo77-blog',
            startDate: '2025-01-20',
            highlights: ['Animacje 3D', 'Efekty scrollowania', 'Wielojęzyczność PL/EN'], 
            category: 'Kreatywna Technologia',
            features: [
                {
                    title: 'Immersyjne Doświadczenie 3D',
                    items: [
                        '**Interaktywna Smycz 3D**: Symulowana fizycznie karta ID 3D w sekcji hero reagująca na ruchy myszy.',
                        '**Tła Hyperspace**: Niestandardowe efekty warp oparte na shaderach dla futurystycznej estetyki Web3.',
                        '**Systemy Cząsteczek**: Dynamiczne cząsteczki tła wzbogacające głębię i interaktywność.'
                    ]
                },
                {
                    title: 'Profesjonalne Statystyki',
                    items: [
                        '**Statystyki Kodowania na Żywo**: Zintegrowane karty WakaTime pokazujące najczęściej używane języki.',
                        '**Dynamiczne Metryki GitHub**: Karty na żywo wyświetlające statystyki repozytoriów i kontrybucji.',
                        '**Interaktywna Oś Czasu**: Wizualna podróż przez moją karierę i projekty.'
                    ]
                },
                {
                    title: 'Wydajność i UX',
                    items: [
                        '**Wielojęzyczność (PL/EN)**: Pełne wsparcie dla internationalizacji.',
                        '**Płynne Przewijanie**: Płynne scrollowanie oparte na Lenis.',
                        '**Silnik Motywów**: Tryb ciemny/jasny z efektem "Click Spark".',
                        '**Responsywna Architektura**: Pixel-perfect layouty na mobile, tablet i desktop.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Sklonuj repozytorium',
                    code: 'git clone https://github.com/Bonzokoles/jimbo77-blog.git\ncd jimbo77-blog',
                    type: 'code'
                },
                {
                    title: 'Zainstaluj zależności',
                    code: 'npm install',
                    type: 'code'
                },
                {
                    title: 'Zmienne środowiskowe',
                    type: 'text',
                    code:
                        `Utwórz plik .env.local w katalogu głównym:

NEXT_PUBLIC_GITHUB_USERNAME=Bonzokoles
WAKATIME_API_KEY=twoj_klucz_wakatime`
                },
                {
                    title: 'Uruchom serwer deweloperski',
                    code: 'npm run dev',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Problemy wydajności z ciężkimi zasobami 3D",
                    solution: "Zaprojektowałem niestandardowy potok renderowania z wykorzystaniem Instanced Meshes i agresywnej kompresji DRaco, redukując czas ładowania o 60% przy utrzymaniu stabilnych 60 FPS na urządzeniach mobilnych."
                },
                {
                    problem: "Synchronizacja stanu aplikacji",
                    solution: "Wdrożyłem system zarządzania stanem globalnym oparty na Zustand do orkiestracji złożonych interakcji między warstwą React UI a Canvas 3D, zapewniając idealnie zsynchronizowane animacje."
                },
                {
                    problem: "Kompatybilność shaderów między przeglądarkami",
                    solution: "Opracowałem materiały zapasowe i detekcję możliwości opartą na uniformach, aby niestandardowe shadery GLSL renderowały się poprawnie w różnych implementacjach WebGL."
                }
            ],
            galleryImages: [
                '/assets/ProjectPage1.jpeg',
                '/assets/ProjectPage2.jpeg',
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
            ]
        },
        {
            id: 'project-2',
            title: 'SNBTIn - Platforma Edukacyjna',
            description: 'Platforma e-learningowa do przygotowania do egzaminów standaryzowanych.',
            longDescription: 'SNBTIn to kompleksowa platforma edukacyjna zaprojektowana dla uczniów przygotowujących się do egzaminów. Oferuje pełne materiały, interaktywne wideo, tysiące ćwiczeń i regularne testy próbne. Z ponad 10,000 aktywnych użytkowników i 85% wskaźnikiem zdawalności.',
            image: '/assets/ProjectPage2.jpeg',
            techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
            tools: ['VS Code', 'GitHub', 'Figma'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/SNBTIn',
            demoUrl: 'https://snbtin.vercel.app/',
            startDate: '2025-01-01',
            highlights: ['10 000+ Aktywnych Użytkowników', '85% Zdawalność', '98% Podobieństwo do Egzaminów'],
            category: 'Platforma EdTech',
            features: [
                {
                    title: '📚 Kompleksowa Nauka',
                    items: [
                        '**Pełne Materiały**: Pokrycie całego programu z PDF-ami i interaktywnymi dokumentami.',
                        '**Wideo Interaktywne**: Wysokiej jakości wyjaśnienia od ekspertów.',
                        '**Ćwiczenia**: Ponad 10 000 pytań ćwiczeniowych ze szczegółowymi rozwiązaniami.'
                    ]
                },
                {
                    title: '🎯 Mistrzostwo Egzaminacyjne',
                    items: [
                        '**Regularne Testy Próbne**: Symulacje egzaminów z najnowszymi wzorcami pytań.',
                        '**Analiza Umiejętności**: Szczegółowy dashboard wydajności do śledzenia postępów.',
                        '**98% Podobieństwo**: Pytania zaprojektowane aby odzwierciedlać prawdziwe egzaminy.'
                    ]
                },
                {
                    title: '💻 Nowoczesne Doświadczenie',
                    items: [
                        '**Forum Dyskusyjne**: Przestrzeń do współpracy między uczniami i nauczycielami.',
                        '**Tryb Ciemny/Jasny**: Komfortowe środowisko nauki o każdej porze dnia.',
                        '**Responsywny Design**: Zoptymalizowany pod desktop, tablet i urządzenia mobilne.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Sklonuj repozytorium',
                    code: 'git clone https://github.com/Bonzokoles/SNBTIn.git\ncd SNBTIn',
                    type: 'code'
                },
                {
                    title: 'Zainstaluj zależności',
                    code: 'npm install',
                    type: 'code'
                },
                {
                    title: 'Uruchom serwer deweloperski',
                    code: 'npm run dev',
                    type: 'code'
                }
            ]
        },
        {
            id: 'project-3',
            title: 'Terraflow - Platforma IoT',
            description: 'Profesjonalne rozwiązanie IoT dla precyzyjnego rolnictwa.',
            longDescription: 'Rozwiązanie IoT dla precyzyjnego rolnictwa z architekturą Direct-to-Cloud ESP32–Firebase, backendem Go (Gin) i interaktywnym dashboardem Next.js do monitorowania i kontroli w czasie rzeczywistym.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
            techStack: ['Go', 'Gin', 'Next.js', 'Firebase', 'ESP32', 'Docker'],
            tools: ['VS Code', 'Docker', 'Firebase Console'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/TerraflowPlatform',
            startDate: '2024-12-01',

            highlights: ['Architektura Direct-to-Cloud', 'Dashboard czasu rzeczywistego', 'Sterowanie IoT'],
            category: 'IoT & Embedded',
        },
        {
            id: 'project-4',
            title: 'Silnik DocsInsight',
            description: 'System RAG do inteligentnej analizy dokumentów.',
            longDescription: 'Wysokowydajna, prywatna platforma Retrieval-Augmented Generation (RAG). Użytkownicy mogą przesyłać złożone dokumenty i wchodzić z nimi w interakcję przez interfejs wyszukiwania neuronowego napędzany lokalnymi LLM.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
            techStack: ['Python', 'LangChain', 'Ollama', 'ChromaDB', 'Docker'],
            tools: ['VS Code', 'Docker', 'Ollama'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/RAG-DocsInsight-Engine',
            startDate: '2024-11-01',

            highlights: ['Wsparcie lokalnych LLM', 'Wiele formatów dokumentów', 'Wyszukiwanie neuronowe'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-5',
            title: 'Donasiaku',
            description: 'Webowa platforma zarządzania darowiznami.',
            longDescription: 'Platforma gdzie darczyńcy mogą wystawiać przedmioty do oddania, a beneficjenci mogą o nie wnioskować. Funkcje obejmują bezpieczny czat i organizację dostawy.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
            techStack: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
            tools: ['VS Code', 'PHPStorm', 'MySQL Workbench'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Donasiaku',
            startDate: '2024-10-01',

            highlights: ['Architektura Monorepo', 'Czat w czasie rzeczywistym', 'Śledzenie darowizn'],
            category: 'Inżynieria Oprogramowania',
        },
        {
            id: 'project-6',
            title: 'Automatyzacja Bezpieczeństwa z GenAI',
            description: 'System wykrywania zagrożeń oparty na AI.',
            longDescription: 'Deep Learning i Generative AI do automatycznego wykrywania zagrożeń cyberbezpieczeństwa, obejmujący SQL Injection, DDoS, włamania sieciowe i analizę malware z wykorzystaniem Transformers.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
            techStack: ['Python', 'TensorFlow', 'Transformers', 'Scikit-learn', 'Pandas'],
            tools: ['Jupyter', 'Google Colab', 'Wireshark'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Security-Automation-GenAI',
            startDate: '2024-09-01',

            highlights: ['Wykrywanie SQL Injection', 'Analiza wzorców DDoS', 'Klasyfikacja Malware'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-7',
            title: 'Księga Gości Web3 DApp',
            description: 'Zdecentralizowana księga gości na Ethereum.',
            longDescription: 'Zdecentralizowana aplikacja księgi gości zbudowana z Next.js, Hardhat i Solidity, umożliwiająca użytkownikom zapisywanie niezmiennych wiadomości bezpośrednio w blockchainie Ethereum.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
            techStack: ['Solidity', 'Hardhat', 'Next.js', 'Ethereum', 'Web3.js'],
            tools: ['VS Code', 'MetaMask', 'Remix IDE'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Web3GuestbookDapp',
            startDate: '2025-01-01',

            highlights: ['Niezmienne Rekordy', 'Integracja Smart Contract', 'Połączenie z Portfelem'],
            category: 'Blockchain',
        },
        {
            id: 'project-8',
            title: 'Digilibzx',
            description: 'Nowoczesny system biblioteki cyfrowej Full-Stack.',
            longDescription: 'System biblioteki cyfrowej z podsumowaniami książek napędzanymi AI (Gemini), inteligentnym koszykiem wypożyczeń i kompleksowym panelem administracyjnym.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop',
            techStack: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Docker', 'Google Gemini'],
            tools: ['IntelliJ IDEA', 'VS Code', 'Docker'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Digilibzx',
            startDate: '2024-08-01',

            highlights: ['Podsumowania AI', 'Inteligentny Koszyk', 'Analityka Administracyjna'],
            category: 'Inżynieria Oprogramowania',
        },
        {
            id: 'project-9',
            title: 'POLABDC Zarządzanie Stomatologią',
            description: 'SaaS do zarządzania kliniką stomatologiczną z AI.',
            longDescription: 'RoxyDental (POLABDC) to kompleksowe rozwiązanie SaaS do cyfryzacji operacji kliniki stomatologicznej, integrujące AI do prognozowania chorób i analizy danych.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
            techStack: ['Next.js', 'Express.js', 'Prisma', 'Supabase', 'Python', 'Google Gemini'],
            tools: ['VS Code', 'Supabase', 'Figma'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/POLABDC',
            startDate: '2024-07-01',

            highlights: ['Prognozowanie Chorób AI', 'System EMR', 'Harmonogramowanie Wizyt'],
            category: 'Inżynieria Oprogramowania',
        },
        {
            id: 'project-10',
            title: 'Klasyfikator Obrazów Deep Learning',
            description: 'Interaktywne wizualizacje CNN i MobileNetV2.',
            longDescription: 'Edukacyjna platforma Deep Learning skupiona na klasyfikacji obrazów z wizualizacją map cech w czasie rzeczywistym i porównaniem modeli (CNN vs MobileNetV2).',
            image: '/images/projects/dl-classifier.png',
            techStack: ['Python', 'TensorFlow', 'Keras', 'Matplotlib'],
            tools: ['Jupyter', 'Google Colab'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/CA-Modul03-HandsOn',
            startDate: '2024-06-01',

            highlights: ['Wizualizacja Map Cech', 'Porównanie Modeli', 'Predykcje w czasie rzeczywistym'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-11',
            title: 'Platforma Odkrywania Książek AI',
            description: 'Lokalny system rekomendacji książek oparty na RAG.',
            longDescription: 'System rekomendacji książek z AI zbudowany w Streamlit i Ollama. Używa \'nomic-embed-text\' do wyszukiwania semantycznego i \'llama3.2\' do głębokiej analizy. 100% lokalny i prywatny.',
            image: '/images/projects/ollama-books.png',
            techStack: ['Python', 'Streamlit', 'Ollama', 'LangChain', 'Nomic Embed'],
            tools: ['VS Code', 'Ollama', 'Streamlit'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/OllamaLLM-RecomendationSystem',
            startDate: '2024-05-01',

            highlights: ['Wyszukiwanie Semantyczne', 'Lokalna Inferencja LLM', 'Priorytet Prywatności'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-12',
            title: 'Analiza Sentymentu MyTelkomsel',
            description: 'Analiza sentymentu recenzji aplikacji z Deep Learning.',
            longDescription: 'Analiza sentymentu recenzji aplikacji za pomocą modeli SVM, RandomForest i BiLSTM. Osiągnięto dokładność 86.82% z BiLSTM.',
            image: '/images/projects/sentiment-analysis.png',
            techStack: ['Python', 'TensorFlow', 'BiLSTM', 'Scikit-learn', 'Pandas'],
            tools: ['Jupyter', 'Google Colab'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/MyTelkomsel-Sentiment-Insights',
            startDate: '2024-04-01',

            highlights: ['Model BiLSTM', '86%+ Dokładność', 'Analiza Porównawcza'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-13',
            title: 'NeuroVision - Detekcja w Czasie Rzeczywistym',
            description: 'Detekcja obiektów w czasie rzeczywistym oparta na YOLOv3.',
            longDescription: 'System detekcji obiektów w czasie rzeczywistym z użyciem YOLOv3 i OpenCV. Wykrywa 80 klas obiektów z datasetu COCO z wysoką wydajnością i niskim opóźnieniem.',
            image: '/images/projects/neurovision.png',
            techStack: ['Python', 'OpenCV', 'YOLOv3', 'Deep Learning'],
            tools: ['VS Code', 'Anaconda'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/NeuroVision-Smarter-RealTime-Detection',
            startDate: '2024-03-01',

            highlights: ['FPS w czasie rzeczywistym', '80 Klas Obiektów', 'Integracja z Kamerą'],
            category: 'AI & Machine Learning',
        },
        {
            id: 'project-14',
            title: 'Głosy Niesłyszane',
            description: 'Anonimowa platforma dla osób dotkniętych konfliktami.',
            longDescription: 'Bezpieczna, anonimowa platforma dla osób dotkniętych konfliktami do dzielenia się historiami. Wykorzystuje design uwzględniający traumy, moderację AI i bezpieczeństwo klasy enterprise.',
            image: '/images/projects/voices-unheard.png',
            techStack: ['React', 'Node.js', 'Encryption', 'AI Content Moderation'],
            tools: ['VS Code', 'Figma'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Voices-Unheard-ASE',
            startDate: '2024-02-01',

            highlights: ['Ochrona Anonimowości', 'Moderacja AI', 'Design Uwzględniający Traumy'],
            category: 'Inżynieria Oprogramowania',
        },
        {
            id: 'project-15',
            title: 'Inteligentny System Detekcji Ruchu',
            description: 'Detekcja ruchu IoT z YOLO-Pose i MQTT.',
            longDescription: 'Inteligentna detekcja ruchu na Raspberry Pi z użyciem YOLO11-Pose i OpenCV, zintegrowana z EMQX MQTT do zdalnego sterowania i monitorowania urządzeń IoT.',
            image: '/images/projects/aiot-motion.png',
            techStack: ['Python', 'YOLOv11', 'OpenCV', 'MQTT', 'Raspberry Pi'],
            tools: ['VS Code', 'Raspberry Pi', 'EMQX'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/AIoT-DMouv2025',
            startDate: '2024-01-01',
            highlights: ['Estymacja Pozy', 'Integracja MQTT', 'Zdalne Sterowanie IoT'],
            category: 'IoT & Embedded',
        },
        {
            id: 'project-16',
            title: 'Predykcja Energii Słonecznej PINN',
            description: 'Predykcja energii odnawialnej łącząca Deep Learning i fizykę.',
            longDescription: 'Model predykcji energii odnawialnej z użyciem sieci neuronowej opartej na fizyce (PINN) do rozwiązywania fluktuacji energii słonecznej, integrując prawa fizyki z deep learning.',
            image: '/images/projects/pinn-solar.png',
            techStack: ['Python', 'TensorFlow', 'PINN', 'Physics-based Modeling'],
            tools: ['Jupyter', 'Google Colab'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Photovoltaic-Physics-Informed-Neural-Network',
            startDate: '2023-12-01',
            highlights: ['AI Kierowana Fizyką', 'Energia Odnawialna', 'Wysoka Dokładność'],
        },
        {
            id: 'project-17',
            title: 'Analiza Ryzyka Kredytowego LSTM',
            description: 'Predykcja niespłacania kredytów z użyciem LSTM.',
            longDescription: 'Analiza ryzyka kredytowego do predykcji niespłacania pożyczek z użyciem sieci LSTM (Long Short-Term Memory). Optymalizuje zatwierdzanie pożyczek na podstawie metryk biznesowych i oceny ryzyka.',
            image: '/images/projects/credit-risk.png',
            techStack: ['Python', 'LSTM', 'TensorFlow', 'Scikit-learn', 'Pandas'],
            tools: ['Jupyter', 'Google Colab'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/CreditRisk_Analysis',
            startDate: '2023-11-01',
            highlights: ['Sieć LSTM', 'Ocena Ryzyka', 'Modelowanie Finansowe'],
        },
        {
            id: 'project-18',
            title: 'Rozpoznawanie Gestów Dłoni',
            description: 'Śledzenie dłoni i sterowanie gestami w czasie rzeczywistym.',
            longDescription: 'System rozpoznawania gestów dłoni w czasie rzeczywistym z użyciem MediaPipe i OpenCV. Obsługuje liczenie palców i dynamiczne sterowanie gestami.',
            image: '/images/projects/hand-gesture.png',
            techStack: ['Python', 'MediaPipe', 'OpenCV'],
            tools: ['VS Code', 'Anaconda'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Hand-Gesture-Recognition',
            startDate: '2023-10-01',
            highlights: ['Śledzenie Dłoni', 'Sterowanie Gestami', 'Wizja Komputerowa'],
        },
        {
            id: 'project-19',
            title: 'Dashboard Analityka Danych',
            description: 'Interaktywne narzędzie wizualizacji danych.',
            longDescription: 'Interaktywny dashboard dla analityków danych do eksploracji i wizualizacji zestawów danych z użyciem Dash i Plotly. Funkcje filtrowania w czasie rzeczywistym i dynamiczne wykresy.',
            image: '/images/projects/data-dashboard.png',
            techStack: ['Python', 'Dash', 'Plotly', 'Pandas'],
            tools: ['VS Code', 'Jupyter'],
            status: 'completed',
            repoUrl: 'https://github.com/Bonzokoles/Data-Analyst-Dashboard',
            startDate: '2023-09-01',
            highlights: ['Interaktywne Wizualizacje', 'Filtrowanie w czasie rzeczywistym', 'Framework Dash'],
        },
    ],
    experiences: [
        {
            id: 'exp-1',
            company: 'Freelance / Projekty Własne',
            position: 'Full Stack Developer & Inżynier AI',
            description: 'Niezależne tworzenie aplikacji webowych, narzędzi AI i projektów blockchain.',
            responsibilities: [
                'Projektowanie i wdrażanie aplikacji webowych w Next.js, React i TypeScript',
                'Budowanie narzędzi AI z wykorzystaniem Python, TensorFlow i LangChain',
                'Tworzenie smart kontraktów i DApp na Ethereum (Solidity, Hardhat)',
                'Eksploracja nowych technologii i publikowanie projektów open-source na GitHub',
            ],
            skills: ['Next.js', 'React', 'TypeScript', 'Python', 'TensorFlow', 'Solidity', 'Docker'],
            startDate: '2023-01-01',
            isOngoing: true,
            location: 'Polska, zdalnie',
            type: 'freelance',
            logo: '/assets/logocps.png',
        },
        {
            id: 'exp-2',
            company: 'Projekty Open Source',
            position: 'Kontrybutor & Maintainer',
            description: 'Aktywny udział w ekosystemie open source na GitHub.',
            responsibilities: [
                'Utrzymywanie własnych repozytoriów z projektami AI i web',
                'Code review i współpraca z innymi developerami',
                'Dokumentowanie projektów i tworzenie instrukcji instalacji',
                'Eksperymentowanie z cutting-edge technologiami (RAG, AI Agents, Web3)',
            ],
            skills: ['Git', 'GitHub', 'Dokumentacja', 'Code Review', 'CI/CD'],
            startDate: '2023-06-01',
            isOngoing: true,
            location: 'Zdalnie',
            type: 'part-time',
            logo: '/assets/logocps.png',
        },
        {
            id: 'exp-3',
            company: 'Samokształcenie & Kursy',
            position: 'Inżynier AI (ścieżka edukacyjna)',
            description: 'Intensywna nauka Machine Learning, Deep Learning i MLOps.',
            responsibilities: [
                'Ukończenie kursów ML od Andrew Ng (Coursera/DeepLearning.AI)',
                'Certyfikacja AWS Academy Cloud i Machine Learning Foundation',
                'Budowanie portfolio projektów z Computer Vision i NLP',
                'Praktyczne wdrożenia modeli od prototypu do produkcji',
            ],
            skills: ['Machine Learning', 'Deep Learning', 'MLOps', 'Computer Vision', 'NLP', 'Python'],
            startDate: '2023-01-01',
            isOngoing: true,
            location: 'Polska',
            type: 'full-time',
            logo: '/assets/microsotlogo.jpg',
        },
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Samokształcenie & Kursy Online',
            degree: 'Certyfikaty i kursy',
            major: 'AI, Full Stack Development, Blockchain',
            startDate: '2023-01-01',
            isOngoing: true,
            gpa: '',
            activities: ['Coursera/DeepLearning.AI', 'AWS Academy', 'Projekty Open Source', 'Hackathony'],
            achievements: [
                'Certyfikat AWS Academy Cloud',
                'Kurs Supervised ML – Andrew Ng (Coursera)',
                'Aktywny kontrybutor open source na GitHub',
            ],
        },
    ],
    achievements: [
        {
            id: 'ach-1',
            title: 'AWS Academy Graduate - Cloud 1',
            issuer: 'Amazon Web Services',
            date: '2025-01-01',
            description: 'Certyfikat AWS Academy – Wprowadzenie do Chmury.',
            category: 'certification',
        },
        {
            id: 'ach-2',
            title: 'Supervised Machine Learning: Regresja i Klasyfikacja',
            issuer: 'DeepLearning.AI (Coursera)',
            date: '2025-01-01',
            description: 'Kompleksowy kurs nadzorowanego uczenia maszynowego od Andrew Ng.',
            credentialId: 'JEZL7ZL9SADP',
            category: 'certification',
        },
        {
            id: 'ach-3',
            title: 'Machine Learning Foundation',
            issuer: 'Amazon Web Services',
            date: '2024-06-01',
            description: 'Certyfikat AWS obejmujący podstawy uczenia maszynowego.',
            credentialId: '4fc1c551-1f68-47cc-b371-d2785495ae61',
            category: 'certification',
        },
        {
            id: 'ach-4',
            title: 'Modelowanie Machine Learning',
            issuer: 'Platforma edukacyjna',
            date: '2024-09-01',
            description: 'Certyfikat budowy i wdrażania modeli ML.',
            credentialId: '1RXY20W6KXVVM',
            category: 'certification',
        },
        {
            id: 'ach-5',
            title: 'Zaawansowany Python',
            issuer: 'Platforma edukacyjna',
            date: '2024-06-01',
            description: 'Certyfikat zaawansowanego programowania w Pythonie.',
            category: 'certification',
        },
        {
            id: 'ach-6',
            title: 'Podstawy SQL z użyciem SELECT',
            issuer: 'DQLab',
            date: '2024-06-01',
            description: 'Certyfikat podstaw języka SQL.',
            category: 'certification',
        },
        {
            id: 'ach-7',
            title: 'React – Podstawy (Gold)',
            issuer: 'Platforma edukacyjna',
            date: '2024-06-01',
            description: 'Certyfikat podstaw React.js z oceną Gold.',
            category: 'certification',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'library' },
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn', category: 'library' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas', category: 'library' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy', category: 'library' },
        { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', category: 'library' }, // Matplotlib not on simpleicons sometimes or generic
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes', category: 'tool' },
        { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform', category: 'tool' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'LangGraph', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'library' },
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask', category: 'framework' },
        { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface', category: 'library' },
    ],
    hardSkills: [
        { name: 'Architektura Systemów', level: 'advanced', category: 'software' },
        { name: 'Fine-Tuning LLM & RAG', level: 'expert', category: 'ai' },
        { name: 'Full Stack Development', level: 'expert', category: 'software' },
        { name: 'Agenci AI & Autonomia', level: 'expert', category: 'ai' },
        { name: 'Deep Learning (CV/NLP)', level: 'advanced', category: 'ai' },
        { name: 'Mikroserwisy & API Design', level: 'advanced', category: 'software' },
        { name: 'Strategia Cloud Native', level: 'intermediate', category: 'software' },
        { name: 'Dokumentacja Techniczna', level: 'expert', category: 'software' },
        { name: 'Machine Learning Ops', level: 'expert', category: 'ai' },
        { name: 'Prompt Engineering', level: 'expert', category: 'ai' },
        { name: 'Architektura Chmury (AWS)', level: 'intermediate', category: 'software' },
        { name: 'DevOps & CI/CD', level: 'advanced', category: 'software' },
        { name: 'Analiza Systemów', level: 'expert', category: 'software' },
    ],
    softSkills: [
        { name: 'Liderstwo', description: 'Zarządzanie zespołami i złożonymi projektami' },
        { name: 'Krytyczne Myślenie', description: 'Analityczne podejście do złożonych problemów' },
        { name: 'Prezentacje', description: 'Prowadzenie warsztatów i prezentacji technicznych' },
        { name: 'Praca Zespołowa', description: 'Współpraca w zróżnicowanych zespołach' },
        { name: 'Komunikacja', description: 'Jasna komunikacja techniczna i biznesowa' },
        { name: 'Adaptacyjność', description: 'Szybkie przyswajanie nowych technologii' },
        { name: 'Zarządzanie Czasem', description: 'Efektywne priorytetyzowanie i dostarczanie' },
        { name: 'Negocjacje', description: 'Zarządzanie relacjami i partnerstwami' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab', category: 'ide' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' }, // Default black, handled by dark:invert in component
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' },
        { name: 'Conda', icon: 'https://cdn.simpleicons.org/anaconda', category: 'devops' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', category: 'devops' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
    ],
    faqs: [
        {
            question: 'Jakie usługi oferujesz?',
            answer: 'Specjalizuję się w Full Stack Development (React, Next.js, Node.js), AI/ML Development (TensorFlow, Computer Vision, NLP), Data Science oraz Blockchain/Web3 (Solidity, Smart Contracts, DApps).',
        },
        {
            question: 'Jakie technologie aktualnie eksplorujesz?',
            answer: 'Aktualnie zagłębiam się w Agentach AI, technologii Blockchain (Solidity, Smart Contracts) i MLOps dla produkcyjnych systemów AI.',
        },
        {
            question: 'Czy jesteś dostępny do współpracy?',
            answer: 'Tak! Jestem otwarty na projekty freelance, współprace i ciekawe projekty w dziedzinie AI, Data Science, Full Stack Development i Blockchain. Napisz do mnie!',
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'future-of-ai-agents',
            title: 'Przyszłość Agentów AI w Przedsiębiorstwach',
            excerpt: 'Jak autonomiczni agenci redefiniują architekturę oprogramowania i procesy decyzyjne.',
            content: 'Szczegółowa eksploracja agentów AI...',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
            date: '2025-01-15',
            category: 'ai',
            tags: ['AI', 'Agenci', 'Enterprise'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'web3-ux-challenges',
            title: 'Pokonywanie Wyzwań UX w Web3',
            excerpt: 'Strategie budowania zdecentralizowanych aplikacji, które działają równie płynnie jak Web2.',
            content: 'UX w Web3 jest kluczowy...',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
            date: '2025-01-10',
            category: 'web3',
            tags: ['Web3', 'Blockchain', 'UX'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-3',
            slug: 'mastering-nextjs-performance',
            title: 'Opanowanie Wydajności Next.js',
            excerpt: 'Zaawansowane techniki optymalizacji Core Web Vitals w nowoczesnych aplikacjach React.',
            content: 'Optymalizacja wydajności...',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop',
            date: '2025-01-05',
            category: 'coding',
            tags: ['Next.js', 'React', 'Wydajność'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-4',
            slug: 'ai-driven-security',
            title: 'Cyberbezpieczeństwo Napędzane AI',
            excerpt: 'Wykorzystanie deep learning do wykrywania i zapobiegania nowoczesnym włamaniom sieciowym.',
            content: 'Cyberbezpieczeństwo z AI...',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
            date: '2024-12-20',
            category: 'ai',
            tags: ['AI', 'Bezpieczeństwo', 'Deep Learning'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '7'
        },
        {
            id: 'blog-5',
            slug: 'llm-fine-tuning',
            title: 'Fine-Tuning LLM Lokalnie',
            excerpt: 'Przewodnik po optymalizacji modeli open-source z użyciem Ollama i technik LoRA.',
            content: 'Lokalne fine-tuning LLM...',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
            date: '2024-12-15',
            category: 'ai',
            tags: ['LLM', 'Python', 'Ollama'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '8'
        },
        {
            id: 'blog-6',
            slug: 'smart-contract-security',
            title: 'Wzorce Audytu Smart Contractów',
            excerpt: 'Popularne podatności i jak im zapobiegać w Solidity.',
            content: 'Wzorce audytu...',
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
            date: '2024-12-10',
            category: 'web3',
            tags: ['Solidity', 'Ethereum', 'Bezpieczeństwo'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-7',
            slug: 'modern-state-management',
            title: 'Nowoczesne Zarządzanie Stanem w React',
            excerpt: 'Porównanie Zustand, Redux Toolkit i React Context dla dużych aplikacji.',
            content: 'Zarządzanie stanem...',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop',
            date: '2024-12-05',
            category: 'coding',
            tags: ['React', 'Zustand', 'Architektura'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-8',
            slug: 'iot-edge-computing',
            title: 'Edge Computing z ESP32',
            excerpt: 'Implementacja przetwarzania danych w czasie rzeczywistym na krawędzi sieci dla przemysłowego IoT.',
            content: 'Edge computing...',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            date: '2024-11-25',
            category: 'coding',
            tags: ['IoT', 'ESP32', 'Edge'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-9',
            slug: 'ai-in-healthcare',
            title: 'Transformacja AI w Ochronie Zdrowia',
            excerpt: 'Jak wizja komputerowa wspiera diagnostykę medyczną i analizę danych.',
            content: 'AI w ochronie zdrowia...',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
            date: '2024-11-20',
            category: 'ai',
            tags: ['Zdrowie', 'AI', 'Etyka'],
            author: { name: 'Karol Lissoń', avatar: '/about/karol-lisson.jpeg' },
            readTime: '7'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Badania Deep Learning',
            description: 'Warsztaty z badania Deep Learning i Computer Vision.',
            date: '2025-01-20',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            category: 'research'
        },
        {
            id: 'gal-2',
            title: 'Sympozjum Smart City',
            description: 'Prezentacja rozwiązań AIoT dla zrównoważonego rozwoju miast.',
            date: '2024-12-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-3',
            title: 'Wizualizacja Sieci Neuronowej',
            description: 'Niestandardowa wizualizacja architektury konwolucyjnej sieci neuronowej.',
            date: '2024-11-30',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        },
        {
            id: 'gal-4',
            title: 'Hackathon Blockchain',
            description: 'Budowanie zdecentralizowanych rozwiązań finansowych w 48 godzin.',
            date: '2024-10-25',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-5',
            title: 'Demo Prototypu IoT',
            description: 'Testowanie integracji sensorów w czasie rzeczywistym z platformami chmurowymi.',
            date: '2024-09-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        }
    ],
};
