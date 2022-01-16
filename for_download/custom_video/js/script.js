$(function () {
    $("video").lazy();
});
$(function () {
    $('.lazy').Lazy();
});

const play = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33301 12.6666V3.33325L11.6663 7.99992L4.33301 12.6666Z" fill="white" />
</svg>`;
const pause = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12.3333H6.66667V3H4V12.3333ZM9.33333 3V12.3333H12V3H9.33333Z" fill="white"/>
</svg>`;
const sound = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5.99999V9.99999H4.66667L8 13.3333V2.66665L4.66667 5.99999H2ZM6.66667 5.88665V10.1133L5.22 8.66665H3.33333V7.33332H5.22L6.66667 5.88665ZM11 7.99999C11 6.81999 10.32 5.80665 9.33333 5.31332V10.68C10.32 10.1933 11 9.17999 11 7.99999ZM9.33333 2.15332V3.52665C11.26 4.09999 12.6667 5.88665 12.6667 7.99999C12.6667 10.1133 11.26 11.9 9.33333 12.4733V13.8467C12.0067 13.24 14 10.8533 14 7.99999C14 5.14665 12.0067 2.75999 9.33333 2.15332Z" fill="white"/>
</svg>`;
const mute = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.89313 1.95679L1.95312 2.89679L4.85979 5.80345L4.66646 6.00345H1.99979V10.0035H4.66646L7.99979 13.3368V8.94345L10.7865 11.7301C10.3531 12.0568 9.86646 12.3168 9.33312 12.4701V13.8435C10.2265 13.6435 11.0465 13.2301 11.7398 12.6768L13.1065 14.0435L14.0465 13.1035L2.89313 1.95679ZM6.66646 10.1168L5.21979 8.67012H3.33312V7.33679H5.21979L5.80646 6.75012L6.66646 7.61012V10.1168ZM12.6665 8.00345C12.6665 8.55012 12.5665 9.07679 12.3931 9.56345L13.4131 10.5835C13.7865 9.80345 13.9998 8.93012 13.9998 8.00345C13.9998 5.15012 12.0065 2.76345 9.33312 2.15679V3.53012C11.2598 4.10345 12.6665 5.89012 12.6665 8.00345ZM7.99979 2.67012L6.74646 3.92345L7.99979 5.17679V2.67012ZM10.9998 8.00345C10.9998 6.82345 10.3198 5.81012 9.33312 5.31679V6.51012L10.9865 8.16345C10.9931 8.11012 10.9998 8.05679 10.9998 8.00345Z" fill="white"/>
</svg>
`;
const replay = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00033 3.99992V1.33325L4.66699 4.66659L8.00033 7.99992V5.33325C10.207 5.33325 12.0003 7.12659 12.0003 9.33325C12.0003 11.5399 10.207 13.3333 8.00033 13.3333C5.79366 13.3333 4.00033 11.5399 4.00033 9.33325H2.66699C2.66699 12.2799 5.05366 14.6666 8.00033 14.6666C10.947 14.6666 13.3337 12.2799 13.3337 9.33325C13.3337 6.38659 10.947 3.99992 8.00033 3.99992Z" fill="white"/>
</svg>`;

const StartButton = document.querySelector(`.start-button`);
const poster = document.querySelector(`.video-player__poster`)
const playButton = document.querySelector('.play-button');
const video = document.getElementById('video');
const timeline = document.querySelector('.timeline');
const soundButton = document.querySelector('.sound-button');
const fullscreenButton = document.querySelector('.fullscreen-button');
const videoContainer = document.querySelector('.video-player__elements');
let isFullScreen = false;


const Blink = (button) => {
    StartButton.innerHTML = button;
    StartButton.classList.add(`blink`);
    StartButton.style.zIndex = 2;
    setTimeout(() => {
        StartButton.classList.remove(`blink`)
        StartButton.style.zIndex = 0;
        StartButton.innerHTML = play;
    }, 200);
}

const VideoPlayScript = () => {
    video.play();
    videoContainer.classList.add('playing');
    playButton.innerHTML = pause;
    Blink(play);
}
const VideoPauseScript = () => {
    video.pause();
    videoContainer.classList.remove('playing');
    playButton.innerHTML = play;
    Blink(pause);
}

const VideoClickPause = (event) => {
    if (video.paused) {
        VideoPlayScript();
    } else {
        VideoPauseScript();
    }
    event.stopPropagation();
}


StartButton.addEventListener(`click`, () => {
    StartButton.classList.add(`hidden`);
    poster.classList.add(`hidden`);
    videoContainer.classList.remove(`postered`);
    VideoPlayScript();
})

video.addEventListener(`click`, VideoClickPause)

playButton.addEventListener('click', () => {
    if (video.paused) {
        VideoPlayScript();
    } else {
        VideoPauseScript();
    }
})

video.onended = () => {
    playButton.innerHTML = replay;
}

video.ontimeupdate = () => {
    const percentagePosition = (100 * video.currentTime) / video.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
}

timeline.addEventListener('change', () => {
    const time = (timeline.value * video.duration) / 100;
    video.currentTime = time;
});

soundButton.addEventListener('click', () => {
    video.muted = !video.muted;
    soundButton.innerHTML = video.muted ? mute : sound;
});

fullscreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
});

$('#video').on('fullscreenchange webkitfullscreenchange mozfullscreenchange', function () {
    if (document.fullscreenElement) {
        video.removeEventListener(`click`, VideoClickPause)
        video.setAttribute("controls", "controls");
    } else {
        video.addEventListener(`click`, VideoClickPause)
        video.removeAttribute("controls");
    }
});