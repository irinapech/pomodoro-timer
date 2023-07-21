const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            for (let k = 0; k < 6; k++) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(
                ${Math.floor(255 - 42.5 * i)},
                ${Math.floor(255 - 42.5 * j)},
                ${Math.floor(255 - 42.5 * k)},
                ${Math.random()})`;
                ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

let minutes = .1;
let seconds = minutes * 60;
function countdown() {
    setTimeout('Decrement()', 60);
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        if (seconds < 59) {
            seconds.value = seconds;
        }
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        if (minutes < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        if (minutes < 0) {
            alert('time up');
            minutes.value = 0;
            seconds.value = 0;
        }
        else {
            seconds--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    minutes = Math.floor(seconds / 60);
    return minutes;
}

function getseconds() {
    return seconds - Math.round(minutes * 60);
}

btn.addEventListener('click', draw);
btn.addEventListener('click', countdown);