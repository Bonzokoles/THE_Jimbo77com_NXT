# UI Polish: CardNav & Lanyard
priority: high
created: 2026-03-13T10:00:00
completed: 2026-03-13T12:00:00

## Resolution Notes
Wprowadzono zaawansowane poprawki UI:
- `src/components/ui/CardNav.tsx`: menu cards z efektem glassmorphism (szkło, transparent), mocniejszy cień, większe ikony, efekt podniesienia/skali na hover, usunięcie blur.
- `src/components/three/Lanyard.tsx`: kamera bliżej avatara (zmiana pozycji i FOV), większy avatar/data.
Brak błędów kompilacji, zmiany wizualne zatwierdzone przez użytkownika.
Zmiany techniczne:
* CardNav: gradient, shadow, border, glass shine, większe ikony, hover scale/lift.
* Lanyard: camera.position, camera.fov, sideLength avatara.
Pliki do referencji: CardNav.tsx, Lanyard.tsx.
# History — Completed Tasks

> Zarchiwizowane taski przeniesione z ToDo/ po ukończeniu.
> Każdy plik zawiera notatkę o rozwiązaniu.

## Format pliku

```markdown
# Task Title
priority: medium
created: 2026-01-01T12:00:00
completed: 2026-01-02T15:30:00

## Resolution Notes
Opis jak task został rozwiązany...
```
