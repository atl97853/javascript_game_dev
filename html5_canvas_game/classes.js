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

class Enemy extends Projectile {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color, velocity)
    }
}

const friction = 0.99
class Particle extends Enemy {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color, velocity)
        this.alpha = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
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
        c.restore()
    }

    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}