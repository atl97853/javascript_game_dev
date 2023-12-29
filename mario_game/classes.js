class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }

    }
}

class Platform {
    constructor({ x, y, imageSrc }) {
        this.position = {
            x,
            y
        }
        this.image = new Image()
        this.image.src = imageSrc
        this.width = this.image.width
        this.height = this.image.height
    }

    draw() {
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
        )
    }
}

class GenericObjects extends Platform {
    constructor({ x, y, imageSrc }) {
        super({ x, y, imageSrc })
    }
}