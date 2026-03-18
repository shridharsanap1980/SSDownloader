function downloadVideo() {
    const url = document.getElementById("videoURL").value;

    if (!url) {
        alert("Please paste video link");
        return;
    }

    // ✅ loader show
    document.getElementById("loader").style.display = "block";

    const downloadLink = "/download?video=" + encodeURIComponent(url);
    window.location.href = downloadLink;
}


// ✅ NEW MP3 FUNCTION
function downloadMP3() {
    const url = document.getElementById("videoURL").value;

    if (!url) {
        alert("Please paste video link");
        return;
    }

    // ✅ loader show
    document.getElementById("loader").style.display = "block";

    const downloadLink = "/mp3?video=" + encodeURIComponent(url);
    window.location.href = downloadLink;
}