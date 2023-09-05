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

btn.addEventListener('click', draw);