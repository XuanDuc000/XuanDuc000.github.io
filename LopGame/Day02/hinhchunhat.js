var canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 1000
canvas.style.border = "10px solid red"

var ctx = canvas.getContext('2d')
console.log(ctx)

class Rect {
    constructor(dx, dy, width, height, color) {
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.color = color
    }

    drow() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
    }
}
var rect = new Rect(0, 0, 200, 100, 'red')

rect.drow()
var rect1 = new Rect(800, 0, 200, 100, 'blue')

rect1.drow()
var rect2 = new Rect(0, 900, 200, 100, 'yellow')

rect2.drow()
var rect3 = new Rect(800, 900, 200, 100, 'green')

rect3.drow()