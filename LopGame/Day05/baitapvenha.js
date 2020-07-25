let suyhao = 0.98;

var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});


class Ball {
    constructor(x, y, dx, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.radius = radius;
        this.color = color;
        this.isOnTheGround = false;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }


    move() {
        if ((this.x > canvas.width - this.radius - 1) || (this.x + this.dx <= this.radius)) {
            this.dx = -this.dx;
        }
        this.x = this.x + this.dx;
        this.dx = this.dx * suyhao;
        this.draw();
    }

    jump(x, y) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        this.x = x;
        this.y = y;
        this.draw();
    }
}

//---------
var ball = new Ball(20, canvas.height * 0.5, 0, 20, 'red');
ball.draw();

//Di chuyển sang trái và phải 
addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
        ball.dx += 5;
    }
});

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.move();
}

animate();