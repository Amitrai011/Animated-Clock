const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");

function setTime() {
    let now = new Date();
    let hr = now.getHours() * 30;
    let min = now.getMinutes() * 6;
    let sec = now.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hr+(min / 12)}deg)`;
    minutes.style.transform = `rotateZ(${min}deg)`;
    seconds.style.transform = `rotateZ(${sec}deg)`;
}

setInterval(setTime);