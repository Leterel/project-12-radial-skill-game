# Agentenleitfaden — The Social Game / Radial Skill Game

## Einstieg
Balance-Modus mit festen Simulationsschritten, zufälligen Störungen und konfigurierbarer Steuerung ist auf dem Feature-Branch implementiert. Neuer Browsernachweis fehlt; alter Zielring bleibt unter /legacy-target.html.

Lies README.md, TESTING.md und HANDOFF.md. Anforderungen und vorhandene Funktionen unterscheiden. Technische Grundlagen: README.md. Die bestehenden Detaildokumente bleiben maßgeblich; keine leeren SPEC-/ARCHITECTURE-/TODO-Kopien erzeugen. Offene Arbeit und Verlauf: README.md; konkrete Einnahmegrenzen: MONETIZATION.md, soweit vorhanden.

## Umgebung und Start
Node 22+; Browser. Keine Pakete nötig.

npm start; http://127.0.0.1:8864. Neuer Balance-Modus; früherer Mechaniktest unter /legacy-target.html.

Tests: `npm test`. Bei mehreren Befehlen einzeln ausführen und jeden Exitcode prüfen. Vorhandene Installationen verwenden; fehlende Voraussetzungen melden statt automatisch globale Pakete oder Modelle zu installieren.

## Grenzen
- Größere Änderungen auf einem eigenen Branch; zuerst git status und fremde Änderungen prüfen. Keine parallelen widersprüchlichen Arbeiten am selben Branch.
- Keine Dateien/Repos löschen oder verschieben, keine Historien umschreiben, kein Force-Push. Keine Lizenzänderungen ohne konkrete Freigabe.
- Keine Secrets, privaten Daten, echten Nutzerinhalte oder großen generierten Dateien committen. Keine Sichtbarkeitsänderungen oder zusätzlichen Veröffentlichungen ohne Freigabe.
- Keine bezahlten Dienste, Werbenetzwerke, Zahlungsanbieter oder externe Nachrichten aktivieren.
- Keine Anleitungen zu Straftaten. Bestehenden Modus nicht löschen. Physische Controller-Unterstützung erst nach tatsächlichem Test behaupten.
- Projektwerkzeuge ändern keine anderen Projektquellen. Build-/Testartefakte in isolierten, ignorierten Arbeitsordnern halten. Vorhandene Ausgaben nicht unbesehen überschreiben.

## Nächste sichere Etappe
Neuen Balance-Modus mit npm run test:browser in isoliertem Chrome abnehmen, mobile Pointersteuerung prüfen und Schwierigkeit mit echten Spielversuchen beurteilen. Nicht ohne Browserabnahme in den Hauptbranch übernehmen.

## Übergabe
HANDOFF.md aktualisieren: Ausgangscommit/Branch, konkrete Änderungsliste, ausgeführte Befehle, Ergebnis, ausgelassene Tests samt Grund, Risiken und nächste Etappe. Nur tatsächlich ausgeführte Tests als bestanden ausweisen. Vor Merge Diff und Tests prüfen; externe Freigaben bleiben offen.
