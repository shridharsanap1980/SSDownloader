const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
const PORT = 3000;

// FFmpeg path
process.env.FFMPEG_PATH = "C:\\ffmpeg\\ffmpeg\\bin\\ffmpeg.exe";

app.use(express.static(path.join(__dirname)));

app.get("/download", (req, res) => {

    const videoURL = req.query.video;

    if (!videoURL) {
        return res.send("Video URL required");
    }

    // ✅ UNIQUE FILE NAME (IMPORTANT)
    const fileName = "video_" + Date.now() + ".mp4";

    const command = `"C:\\Python314\\python.exe" -m yt_dlp --ffmpeg-location "C:\\ffmpeg\\ffmpeg\\bin" -o "${fileName}" "${videoURL}"`;

    exec(command, (error, stdout, stderr) => {

        console.log(stdout);
        console.log(stderr);

        if (error) {
            return res.send("Download failed");
        }

        const filePath = path.join(__dirname, fileName);

        if (fs.existsSync(filePath)) {
            res.download(filePath, fileName, () => {
                fs.unlinkSync(filePath); // delete after download
            });
        } else {
            res.send("File not found");
        }

    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});