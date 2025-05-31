const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// List of TikTok video links (you can add more)
const tiktokLinks = [
  "https://www.tiktok.com/@user/video/7250000000000000001",
  "https://www.tiktok.com/@user/video/7250000000000000002",
  "https://www.tiktok.com/@user/video/7250000000000000003"
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
