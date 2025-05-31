const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const videos = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
  "https://example.com/video3.mp4"
];

app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  res.json({ url: videos[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Video API running on port ${PORT}`);
});
