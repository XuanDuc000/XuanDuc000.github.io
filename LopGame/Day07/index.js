let start = document.getElementById('start')
let play = document.getElementById('play')
let end = document.getElementById('end')


let start_game = document.getElementById('start-game')
let choilai = document.getElementById('choilai')
let thoat = document.getElementById('thoat')

start_game.addEventListener('click', function() {
    start.style.display = "none";
    play.style.display = 'flex';
})

choilai.addEventListener('click', function() {
    end.style.display = 'none';
    play.style.display = 'flex';
    resetgame();

})

thoat.addEventListener('click', function() {
    window.location.reload()
})

let canvas = document.getElementById("canvas")
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

class Ball {
    constructor(x, y, radius, color, ) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.radius = radius;
        this.color = color;
        this.score = 0;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = "white";
        c.shadowBlur = 10;
        c.fillStyle = this.color;
        c.fill();
    }

    drawPiPo() {
        c.beginPath();
        c.fillStyle = "white";
        c.font = "12px Georgia";
        c.textAlign = "center";
        c.fillText("HAHA", this.x, this.y + 5);
        c.fill();
        c.stroke();
        c.closePath();
    }
    drawScose() {
        c.beginPath();
        c.shadowBlur = 0;
        c.fillStyle = "white";
        c.font = "50px arial";
        c.fillText(this.score, 100, canvas.height - 30);
        c.fill();
        c.stroke();
        c.closePath();
    }

    move() {
        if ((this.x > canvas.width - this.radius - 1) || (this.x + this.dx <= this.radius)) {
            this.dx = -this.dx;
        }

        if ((this.y > canvas.height - this.radius - 1) || (this.y + this.dy <= this.radius)) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }
    collision(object) {
        let khoangcach = Math.sqrt((this.x - object.x) * (this.x - object.x) + (this.y - object.y) * (this.y - object.y))
        if (khoangcach < this.radius + object.radius) {
            new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3').play();
            this.x = -200
            this.y = -200
            object.score += 1
            if (object.score % 5 == 0) {
                object.radius += 5
            }
            if (object.score == 70) {
                play.style.display = "none";
                end.style.display = "flex";

            }
        }

    }
}
var ball = new Ball(20, 20, 20, 'orange');
ball.draw();
ball.drawScose();
ball.drawPiPo();
addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        ball.dx = -5;
        ball.dy = 0;

    } else if (event.keyCode == 39) {
        ball.dx = 5;
        ball.dy = 0;
    }
    if (event.keyCode == 40) {
        ball.dy = 5;
        ball.dx = 0;

    }
    if (event.keyCode == 38) {
        ball.dy = -5;
        ball.dx = 0;

    }
});

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}


var arrayPoint = []

for (let i = 0; i < 70; i++) {
    let randomX = randomNumber(20, canvas.width - 20)
    let randomY = randomNumber(20, canvas.height - 20)
    let point = new Ball(randomX, randomY, 5, 'red');
    arrayPoint.push(point);
}


function resetgame() {
    ball.x = 20;
    ball.y = 20;
    ball.radius = 20;
    ball.dx = 0;
    ball.dy = 0;
    ball.score = 0;
    for (let i = 0; i < arrayPoint.length; i++) {
        arrayPoint[i].x = randomNumber(20, canvas.width - 20);
        arrayPoint[i].y = randomNumber(20, canvas.height - 20);
    }

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.drawScose();
    ball.drawPiPo();
    ball.move();
    for (let i = 0; i < arrayPoint.length; i++) {
        arrayPoint[i].draw();
        arrayPoint[i].collision(ball);
    }

}

animate();