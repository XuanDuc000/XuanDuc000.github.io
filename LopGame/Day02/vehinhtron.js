var canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 600
canvas.style.border = "10px solid red"

var ctx = canvas.getContext('2d')

console.log(ctx)
class Arc {
    constructor(dx, dy, r, x, color) {
        this.dx = dx
        this.dy = dy
        this.r = r
        this.color = color
        this.x = x
    }

    drow() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.strokeStyle = 'black'
        ctx.arc(this.dx, this.dy, this.r, 0, this.x * Math.PI, false)
        ctx.fill()
        ctx.stroke()
    }
}
var arc = new Arc(500, 300, 200, 2, '#fff')

arc.drow()
var arc1 = new Arc(500, 300, 150, 1, '#fff')

arc1.drow()
var arc2 = new Arc(575, 250, 20, 2, 'back')

arc2.drow()
var arc3 = new Arc(425, 250, 20, 2, 'back')

arc3.drow()