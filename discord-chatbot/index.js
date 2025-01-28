require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const OLLAMA_API = process.env.OLLAMA_API;
const conversationHistory = new Map();

client.on('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Nur auf Erwähnungen reagieren
  if (message.mentions.has(client.user.id)) {
    const prompt = message.content.replace(`<@${client.user.id}>`, '').trim();

    try {
      const response = await getOllamaResponse(prompt, message.author.id);
      message.reply(response);
    } catch (error) {
      console.error('Fehler:', error);
      message.reply('Entschuldigung, ein Fehler ist aufgetreten.');
    }
  }
});

async function getOllamaResponse(prompt, userId) {
  const data = {
    model: "qwen:0.5b",
    messages: conversationHistory.get(userId) || [{ role: "user", content: prompt }]
  };

  try {
    const response = await axios.post(`${OLLAMA_API}/chat/completions`, data, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Chatverlauf aktualisieren
    if (!conversationHistory.has(userId)) {
      conversationHistory.set(userId, []);
    }
    conversationHistory.get(userId).push({ role: "user", content: prompt });
    conversationHistory.get(userId).push(response.data.choices[0].message);

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
}

client.login(process.env.DISCORD_TOKEN);
