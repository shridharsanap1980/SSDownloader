<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SSDownloader</title>
<link rel="icon" type="image/png" href="logo.png">

<style>

body{
margin:0;
font-family:Arial;
background:linear-gradient(120deg,#1877f2,#4facfe);
color:white;
text-align:center;
}

header{
padding:20px;
font-size:28px;
font-weight:bold;
}

.container{
margin-top:120px;
}

input{
width:60%;
padding:15px;
border:none;
border-radius:5px;
font-size:16px;
}

button{
padding:15px 25px;
border:none;
background:#ffcc00;
font-size:16px;
border-radius:5px;
cursor:pointer;
margin-left:10px;
}

button:hover{
background:#ffb700;
}

.features{
margin-top:60px;
}

.features div{
margin:15px;
font-size:18px;
}

footer{
margin-top:120px;
padding:20px;
background:rgba(0,0,0,0.3);
}

</style>

</head>

<body>

<header>
SSDownloader
</header>

<div class="container">

<h1>Free Video Downloader</h1>

<p>Download videos from Facebook, YouTube and Instagram</p>

<input type="text" id="videoURL" placeholder="Paste video link here">

<button onclick="downloadVideo()">Download</button>

</div>

<div class="features">

<div>⚡ Fast Download</div>
<div>🎬 HD Video Support</div>
<div>💯 Free & Unlimited</div>

</div>

<footer>

© 2026 SSDownloader

</footer>

<script src="script.js"></script>

</body>
</html>
