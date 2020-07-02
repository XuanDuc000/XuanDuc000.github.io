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
        ctx.strokeStyle = 'black'
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
        ctx.stroke()
    }
}
var dx = 100
var dy = 100
var width = 100
var height = 100
for (var i = 0; i < 8; i++) {
    dx = 100
    for (var j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                new Rect(dx, dy, width, height, 'black').drow()
            } else {
                new Rect(dx, dy, width, height, 'white').drow()
            }
        } else {
            if (j % 2 == 0) {
                new Rect(dx, dy, width, height, 'white').drow()
            } else {
                new Rect(dx, dy, width, height, 'black').drow()
            }
        }
        dx = dx + 100
    }
    dy = dy + 100
}