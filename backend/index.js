const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

app.get('/download', async (req, res) => {
  try {
    const videoURL = req.query.url;
    const requestedQuality = req.query.quality;

    if (!ytdl.validateURL(videoURL)) {
      return res.status(400).send('Invalid YouTube URL');
    }

    const videoInfo = await ytdl.getInfo(videoURL);
    let selectedFormat;

    // Filter formats that have both video and audio
    const formatsWithVideoAndAudio = videoInfo.formats.filter(format => format.hasVideo && format.hasAudio);

    // If the requested quality exists in available formats, choose it
    if (requestedQuality && formatsWithVideoAndAudio.some(format => format.qualityLabel === requestedQuality)) {
      selectedFormat = ytdl.chooseFormat(formatsWithVideoAndAudio, { quality: requestedQuality });
    } 
    // Otherwise, choose the best available format with both video and audio
    else {
      selectedFormat = ytdl.chooseFormat(formatsWithVideoAndAudio, { quality: 'highest' });
      console.log('Requested quality is not available. Downloading in the best available quality with video and audio.');
    }

    if (!selectedFormat) {
      return res.status(400).send('Failed to find a suitable format for the video.');
    }

    const sanitizedTitle = videoInfo.videoDetails.title.replace(/[^\w\s.-]/g, '_');
    
    res.header('Content-Disposition', `attachment; filename="${sanitizedTitle}.${selectedFormat.container}"`);
    ytdl(videoURL, { format: selectedFormat }).pipe(res);

  } catch (error) {
    console.error('Error downloading video:', error);
    res.status(500).send('Failed to download video');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
