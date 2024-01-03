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

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue')
const projectile = []

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    projectile.forEach((projectile) => {
        projectile.update()
    })
}

window.addEventListener('click', (event) => {

    // projectile creation and continues
    const angle = Math.atan2(
        event.clientY - y,
        event.clientX - x
    )

    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }

    projectile.push(new Projectile(
        x,
        y,
        10,
        'red',
        velocity
    ))
})

animate()