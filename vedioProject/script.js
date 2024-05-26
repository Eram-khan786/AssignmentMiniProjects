const video = document.querySelector(".video");
const playText = document.getElementById("playText");
const pauseText = document.getElementById("pauseText");
const togglePlayPause=document.getElementById("btn")
togglePlayPause.addEventListener("click",function togglePlayPause() {
  if (video.paused) {
    video.play();
    playText.style.display = "none";
    pauseText.style.display = "inline";
  } else {
    video.pause();
    playText.style.display = "inline";
    pauseText.style.display = "none";
  }
})
