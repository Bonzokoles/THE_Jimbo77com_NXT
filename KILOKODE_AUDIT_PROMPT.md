# KILOKODE AUDIT PROMPT — Jimbo77 Portfolio Codebase

## Prompt do wklejenia w Kilokode:

```
Przeskanuj CAŁY katalog src/ tego projektu Next.js (portfolio jimbo77) i znajdź WSZYSTKIE poniższe problemy:

## 1. STARE NAZWY AUTORA SZABLONU (powinny być zastąpione)
Szukaj DOKŁADNIE tych ciągów (case-insensitive):
- "Arfazrll" lub "arfazrll"
- "SYAHRIL" lub "Syahril"  
- "Almazril"
- "Arfian"
- "syahrilarfian"
- "@arfazrll"

Prawidłowe dane właściciela:
- Imię i nazwisko: Karol Lissoń
- Nazwa wyświetlana: KAROL LISSOŃ (w stopce)
- GitHub: Bonzokoles
- Pseudonimy: Bonzo, Kefis, JIMBO77
- Email: karol.bonzo@yahoo.com
- Terminal prompt: bonzo@jimbo77:~

## 2. ZŁAMANE KODOWANIE UTF-8 (polskie znaki)
Szukaj wzorców wskazujących na podwójne/potrójne kodowanie:
- "Ĺ„" (powinno być ń)
- "Ä™" (powinno być ę)  
- "Ä…" (powinno być ą)
- "Ĺ‚" (powinno być ł)
- "Ĺ›" (powinno być ś)
- "Ĺ¼" (powinno być ż)
- "ĂŠ" lub "Ă³" (powinno być ó)
- "â€˘" (powinno być •)
- "â€"" lub "â€"" (powinno być – lub —)
- "LissoĹ" (powinno być Lissoń)
- Wszelkie sekwencje "Ĺ", "Ä", "â€" w tekstach polskich

## 3. POZOSTAŁOŚCI INDONEZYJSKIE
Szukaj:
- Tekst w języku indonezyjskim (np. "Universitas", "berbasis", "mengembangkan")
- Odniesienia do "Telkom University", "SMAN 88 Jakarta"  
- "Dicoding Indonesia", "Bangkit Academy"
- Lokalizacja "id" w konfiguracji i18n
- Pliki messages/id.json (powinny być usunięte)

## 4. PLACEHOLDER / TEMPLATE CONTENT
Szukaj:
- Lorem ipsum lub tekst zastępczy
- Domyślne URL/linki szablonu (nie jimbo77.org/mybonzo.com)
- Niewypełnione pola (puste stringi w danych portfolio)
- Domyślne avatary lub obrazki z innego projektu

## 5. NIESPÓJNOŚCI JĘZYKOWE
Szukaj:
- Tekst po angielsku w danych portfolio, który powinien być po polsku (opisy doświadczeń, osiągnięcia)
- Mieszanka języków w tym samym kontekście
- Brak polskich znaków tam gdzie powinny być (np. "Krol" zamiast "Karol", "Lisso" bez ń)

## 6. BŁĘDNE REFERENCJE DO PLIKÓW
Sprawdź:
- Odniesienia do `/about/karol-lisson.jpeg` (powinno być `/about/apple-touch-icon.png`)
- Wszelkie broken image paths
- Import nieistniejących modułów

## FORMAT RAPORTU
Dla każdego znalezionego problemu podaj:
1. Plik (ścieżka względna)
2. Numer linii
3. Aktualny tekst (fragment)
4. Sugerowana poprawka
5. Priorytet: KRYTYCZNY / WAŻNY / KOSMETYCZNY

Przeszukaj WSZYSTKIE pliki: *.ts, *.tsx, *.json, *.md, *.css, *.js
Pomiń: node_modules/, .next/, .open-next/, dist/
```
