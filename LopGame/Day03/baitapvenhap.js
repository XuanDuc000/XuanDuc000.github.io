var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = radius;
        this.color = color;
        this.isRunning = false
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    move() {
        if (this.isRunning) {
            if (this.x > canvas.width - this.radius - 1) {
                this.x = canvas.width - this.radius;
                this.dx = 0;
                this.dy = 5;
            }
            if (this.y > canvas.height - this.radius - 1) {
                this.y = canvas.height - this.radius;
                this.dy = 0;
                this.dx = -5;
            }
            if (this.x <= this.radius - this.dx) {
                this.x = this.radius;
                this.dx = 0
                this.dy = -5

            }
            if (this.y <= this.radius - this.dy) {
                this.y = this.radius;
                this.dy = 0
                this.dx = 5;
            }
        } else {
            this.dy = 0;
            this.dx = 0;
        }
        this.y = this.y + this.dy;
        this.x = this.x + this.dx;
        this.draw();
    }
    jump(x, y) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x = x;
        this.y = y;
        this.draw()
    }
}
var ball = new Ball(20, 20, 0, 0, 20, 'red');
ball.draw();
var i = 1;
addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        i++
        if (i % 2 == 0) {
            ball.isRunning = true;
        } else {
            ball.isRunning = false;
        }
    }
});

addEventListener("click", function(event) {
    ball.jump(20, 20);
});

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.move();
}

animate();