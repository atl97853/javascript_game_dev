const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Player {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        }
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle = 'black'
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}

const gravity = 10

const player = new Player({
    x: canvas.width / 2,
    y: 100
})

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'blue'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()

    // gravity
    if (player.position.y + player.height < canvas.height) {
        player.position.y += gravity
    }

}

animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'w':
            console.log('up')
            break
        case 'd':
            console.log('right')
            break
        case 'a':
            console.log('left')
            break
        case ' ':
            console.log('attack')
            break
    }
})