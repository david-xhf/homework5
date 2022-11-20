// Add js here.
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const slower = document.getElementById("slower");
const faster = document.getElementById("faster");
const skip = document.getElementById("skip");
const mute = document.getElementById("mute");
const video = document.querySelector("video");
const vol = document.getElementById("volume");
const volSlider = document.getElementById("slider");
volSlider.addEventListener('change', () => {
    video.volume = volSlider.valueAsNumber / 100;
    vol.textContent = volSlider.valueAsNumber;
});
window.addEventListener('load', function () {
    video.load();
    video.autoplay = false;
    video.loop = false;
    video.controls = true;
    vol.textContent = video.volume * 100;
});
play.addEventListener("click", () => video.play());
pause.addEventListener("click", () => video.pause());
mute.addEventListener('click', () => {
    video.muted = !(video.muted);
    mute.textContent == "Mute" ? mute.textContent = "Unmute" : mute.textContent = "Mute";
});
slower.addEventListener("click", function () {
    if (video.playbackRate == 1) video.playbackRate = 0.5;
    else if (video.playbackRate == 2) video.playbackRate = 1;
    else window.alert("Video is at slowest speed!");
    video.playback
});
faster.addEventListener("click", function () {
    if (video.playbackRate == 1) video.playbackRate = 2;
    else if (video.playbackRate == 0.5) video.playbackRate = 1;
    else window.alert("Video is at fastest speed!");
});

skip.addEventListener("click", function () {
    if (video.currentTime + 15 > video.duration) {
        video.currentTime = 0;
    } else video.currentTime += 15;
});
