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
    constructor({ x, y, imageSrc, scale, framesMax }) {
        this.position = {
            x,
            y
        }
        this.image = new Image()
        this.image.src = imageSrc
        this.width = this.image.width
        this.height = this.image.height
        // this.scale = scale
        // this.framesMax = framesMax
    }

    draw() {
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
        )
    }
}

// imageSrc: './assets/kenji/Idle.png',
//     framesMax: 4,
//         scale: 2.5,
//             offset: {
//     x: 215,
//         y: 167,
//     },

// this.image = new Image();
// this.image.src = imageSrc;
// this.scale = scale
// this.framesMax = framesMax;


// draw() {
//     c.drawImage(
//         this.image,
//         this.frameCurrent * (this.image.width / this.framesMax),
//         0,
//         this.image.width / this.framesMax,
//         this.image.height,
//         this.position.x - this.offset.x,
//         this.position.y - this.offset.y,
//         (this.image.width / this.framesMax) * this.scale,
//         this.image.height * this.scale,
//     )
// };