# Tests und Reproduzierbarkeit — The Social Game / Radial Skill Game

## Voraussetzungen
Node 22+; Browser. Keine Pakete nötig.

## Befehle
```text
npm test
```

Start/Build: npm start; http://127.0.0.1:8864. Neuer Balance-Modus; früherer Mechaniktest unter /legacy-target.html.

## Tatsächlicher Befund vom 02.11.2026
9 Modell-/Kontrolltests bestanden, einschließlich deterministischer Balance bei verschiedenen Bildraten. Browserabnahme des neuen Modus vor Ausführung durch Nutzungslimit der automatischen Freigabeprüfung blockiert. Physischer Controller nicht getestet.

Bei fehlenden Paketen/Hardware/Betriebssystemen ist das Ergebnis „nicht ausgeführt“, kein Pass. Plattformnachweise aus älteren Detailberichten gelten nur für die dort genannten Versionen. Android-Automatisierung ausschließlich mit expliziter emulator-Seriennummer und bestätigtem ro.kernel.qemu=1. Physische Geräte, persönliche Medien und Produktionskonten sind keine Testfixtures.

## Vor Merge
`git diff --check` ausführen; relevante Funktionstests wiederholen, wenn Codeänderungen ihren Befund entwerten. Speicherdaten/alte Versionen erhalten. Fehlende externe Abnahmen in HANDOFF.md benennen.
