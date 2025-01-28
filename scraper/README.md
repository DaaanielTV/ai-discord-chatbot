# Web Scraper

## Beschreibung
Dieser Web-Scraper verwendet Puppeteer und Axios, um Daten von Webseiten zu extrahieren. Die gesammelten Daten können in verschiedenen Formaten gespeichert oder weiterverarbeitet werden.

## Voraussetzungen
- Node.js (Version 14 oder höher)
- MongoDB (optional, für die Speicherung der Daten)
- Ollama API-Zugang (optional, für die Datenformatierung)

## Installation
1. Klone das Repository:
   ```bash
   git clone <repository-url>
   cd scraper
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Erstelle eine `.env`-Datei im Hauptverzeichnis und füge die folgenden Umgebungsvariablen hinzu:
   ```plaintext
   OLLAMA_API=deine_ollama_api_url
   ```

## Verwendung
Um den Scraper auszuführen, führe den folgenden Befehl aus:
```bash
node index.js
```

## Daten speichern
Die gesammelten Daten können in einer JSON-Datei gespeichert oder in einer MongoDB-Datenbank abgelegt werden. Stelle sicher, dass MongoDB läuft, wenn du die Datenbankoption verwendest.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.
