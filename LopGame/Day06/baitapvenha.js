let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = -5;
        this.radius = radius;
        this.color = color;

    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
    move() {
        if (this.y + this.radius < 0) {
            this.y = canvas.height - this.radius;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }
}

function randomBong(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}
let arrayPoint = []
addEventListener("click", function(event) {
    arrayPoint.push(new Ball(randomBong(20, canvas.width - 20), canvas.height - 20, 20, randomColor()))
});

function randomColor() {
    let r = randomBong(0, 255)
    let g = randomBong(0, 255)
    let a = randomBong(0, 255)
    return `rgb(${r},${g},${a})`

}

function mau() {
    requestAnimationFrame(mau);
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < arrayPoint.length; i++) {
        arrayPoint[i].draw();
        arrayPoint[i].move();
    }
}
mau();