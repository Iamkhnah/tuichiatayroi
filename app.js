const range = document.getElementById('myRange');
const timeDisplay = document.getElementById('timeDisplay');
const btn = document.getElementById('button');
const btnImage = document.getElementById('buttonImage');
let au = document.getElementById('audio');
let isplay = false;

range.addEventListener('input', function () {
    const minutes = Math.floor(range.value / 60);
    const seconds = range.value % 60;
    timeDisplay.textContent =
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
    au.currentTime = range.value;
});

au.addEventListener('timeupdate', function () {
    range.value = au.currentTime;
    const minutes = Math.floor(range.value / 60);
    const seconds = range.value % 60;
    timeDisplay.textContent =
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
});

au.onloadedmetadata = function () {
    range.max = au.duration;
};

btn.addEventListener('click', function () {
    if (isplay) {
        au.pause();
        btnImage.src = "./All/play.png";
    } else {
        au.play();
        btnImage.src = "./All/pause.png";
    }
    isplay = !isplay;
})