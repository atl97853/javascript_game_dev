const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2,
            false
        )
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile extends Player {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color)
        this.velocity = velocity
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue')
player.draw()

console.log(player)

window.addEventListener('click', (event) => {
    const projectile = new Projectile(
        x,
        y,
        10,
        'red',
        null
    )
    projectile.draw()
})