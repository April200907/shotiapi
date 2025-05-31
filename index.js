const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// List of TikTok video links (you can add more)
const tiktokLinks = [
  "https://vt.tiktok.com/ZSk8J4FBv/",
  "https://vt.tiktok.com/ZSk8JmMGd/",
  "https://vt.tiktok.com/ZSk8J4kMw/", 
  "https://vt.tiktok.com/ZSk8JaXGq/", 
  "https://vt.tiktok.com/ZSk8JCvRU/", 
  "https://vt.tiktok.com/ZSk8JH3qP/", 
  "https://vt.tiktok.com/ZSk8Jg1Jh/",
  "https://vt.tiktok.com/ZSk8Jfk2k/", 
  "https://vt.tiktok.com/ZSk8Jx8JX/", 
  "https://vt.tiktok.com/ZSk8J4Hdp/", 
  "https://vt.tiktok.com/ZSk8J4tKA/" 
  
  
];

// API to fetch random TikTok video (resolves to direct MP4)
app.get("/tikrandom", async (req, res) => {
  try {
    const url = tiktokLinks[Math.floor(Math.random() * tiktokLinks.length)];

    const api = `https://api.tiklydown.me/api/download?url=${encodeURIComponent(url)}`;

    const { data } = await axios.get(api);
    if (!data.video || !data.video.noWatermark) {
      return res.status(500).json({ error: "Failed to fetch video." });
    }

    return res.json({ url: data.video.noWatermark });
  } catch (err) {
    console.error("❌ Error:", err.message);
    return res.status(500).json({ error: "Something went wrong." });
  }
});

app.get("/", (req, res) => {
  res.send("📺 Welcome to Shoti API with TikTok Support!");
});

app.listen(PORT, () => {
  console.log(`🚀 Shoti API is running on port ${PORT}`);
});
