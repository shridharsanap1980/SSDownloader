const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
    res.send("SSDownloader Backend Running ✅");
});

// ================= VIDEO DOWNLOAD =================
app.get("/download", (req, res) => {

    const videoURL = req.query.video;

    if (!videoURL) {
        return res.send("Video URL required");
    }

    const fileName = "video_" + Date.now() + ".mp4";

    const command = `yt-dlp -f mp4 -o "${fileName}" "${videoURL}"`;

    exec(command, (error, stdout, stderr) => {

        console.log(stdout);
        console.log(stderr);

        if (error) {
            return res.send("Download failed");
        }

        const filePath = path.join(__dirname, fileName);

        if (fs.existsSync(filePath)) {
            res.download(filePath, fileName, () => {
                fs.unlinkSync(filePath);
            });
        } else {
            res.send("File not found");
        }

    });

});

// ================= MP3 DOWNLOAD =================
app.get("/mp3", (req, res) => {

    const videoURL = req.query.video;

    if (!videoURL) {
        return res.send("Video URL required");
    }

    const fileName = "audio_" + Date.now() + ".mp3";

    const command = `yt-dlp -x --audio-format mp3 -o "${fileName}" "${videoURL}"`;

    exec(command, (error, stdout, stderr) => {

        console.log(stdout);
        console.log(stderr);

        if (error) {
            return res.send("MP3 download failed");
        }

        const filePath = path.join(__dirname, fileName);

        if (fs.existsSync(filePath)) {
            res.download(filePath, fileName, () => {
                fs.unlinkSync(filePath);
            });
        } else {
            res.send("File not found");
        }

    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});