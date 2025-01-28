# Zusammenfassung des AI Discord Chatbots

## Überblick
Der AI Discord Chatbot ist ein Bot, der auf Discord-Nachrichten reagiert und die Ollama API verwendet, um intelligente Antworten zu generieren. Der Bot kann in verschiedenen Discord-Servern eingesetzt werden und bietet eine interaktive Benutzererfahrung.

## Hauptfunktionen
- **Erwähnungen**: Der Bot reagiert auf Erwähnungen in Nachrichten.
- **Intelligente Antworten**: Durch die Integration der Ollama API kann der Bot kontextbezogene Antworten generieren.
- **Datenbankintegration**: Der Bot kann Benutzerdaten speichern und verwalten.

## Technische Details
- **Technologien**: 
  - Node.js
  - Discord.js
  - Axios
  - Ollama API
- **Datenbank**: MongoDB (optional, für die Speicherung von Benutzerdaten)

## Installation
1. Klone das Repository:
   ```bash
   git clone <repository-url>
   cd ai-discord-chatbot
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Erstelle eine `.env`-Datei und füge die erforderlichen Umgebungsvariablen hinzu:
   ```plaintext
   DISCORD_TOKEN=dein_discord_bot_token
   OLLAMA_API=deine_ollama_api_url
   ```

## Verwendung
Um den Bot zu starten, führe den folgenden Befehl aus:
```bash
node index.js
```

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.
