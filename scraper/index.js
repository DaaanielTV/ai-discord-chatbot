const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/scrapedData', { useNewUrlParser: true, useUnifiedTopology: true });

// Data model definition
const dataSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String
});

const Data = mongoose.model('Data', dataSchema);

async function scrapeWithPuppeteer() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://example.com');

  const data = await page.evaluate(() => {
    let results = [];
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
      results.push({
        title: item.querySelector('h2').innerText,
        link: item.querySelector('a').href,
        description: item.querySelector('p').innerText
      });
    });
    return results;
  });

  await browser.close();
  return data;
}

async function scrapeWithAxios() {
  const { data } = await axios.get('https://example.com');
  const $ = cheerio.load(data);

  let results = [];
  $('.item').each((index, element) => {
    results.push({
      title: $(element).find('h2').text(),
      link: $(element).find('a').attr('href'),
      description: $(element).find('p').text()
    });
  });

  return results;
}

async function formatDataWithOllama(data) {
  const OLLAMA_API = process.env.OLLAMA_API;
  const response = await axios.post(`${OLLAMA_API}/chat/completions`, {
    model: "qwen:0.5b",
    messages: [
      {
        role: "user",
        content: `Bitte formatiere diese Daten: ${JSON.stringify(data)}`
      }
    ]
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].message.content;
}

async function saveToDatabase(data) {
  const dataDoc = new Data(data);
  await dataDoc.save();
  console.log('Daten in der Datenbank gespeichert!');
}

async function main() {
  const scrapedData = await scrapeWithAxios(); // or scrapeWithPuppeteer();
  const formattedData = await formatDataWithOllama(scrapedData);
  await saveToDatabase(formattedData);
  fs.writeFileSync('formatted_data.json', JSON.stringify(formattedData, null, 2));
  console.log('Daten gespeichert!');
}

main().catch(console.error);
