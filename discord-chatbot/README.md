# Discord Chatbot

## Beschreibung
Dieser Bot verwendet die Discord.js-Bibliothek und die Ollama API, um auf Nachrichten in Discord zu reagieren. Er kann auf Erwähnungen reagieren und bietet eine einfache Möglichkeit, mit Benutzern zu interagieren.

## Voraussetzungen
- Node.js (Version 14 oder höher)
- Ein Discord-Bot-Token
- Ollama API-Zugang

## Installation
1. Klone das Repository:
   ```bash
   git clone <repository-url>
   cd discord-chatbot
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Erstelle eine `.env`-Datei im Hauptverzeichnis und füge die folgenden Umgebungsvariablen hinzu:
   ```plaintext
   DISCORD_TOKEN=dein_discord_bot_token
   OLLAMA_API=deine_ollama_api_url
   ```

## Bot starten
Um den Bot zu starten, führe den folgenden Befehl aus:
```bash
node index.js
```

## Verwendung
- Erwähne den Bot in einem Discord-Kanal, um eine Antwort zu erhalten.
- Der Bot reagiert auf Nachrichten, die ihn direkt erwähnen.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.
