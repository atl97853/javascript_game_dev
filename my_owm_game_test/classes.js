class Player {
    constructor({ x, y, width, height, color }) {
        this.position = {
            x,
            y
        }
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}

class SimpleBlock extends Player {
    constructor({ x, y, width, height, color }) {
        super({ x, y, width, height, color })
    }
}