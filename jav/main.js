document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volume-slider');

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value / 100;
    });
});