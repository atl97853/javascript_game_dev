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

class SimpleBlock {
    constructor({ x, y }) {
        this.position = {
            x,
            y
        }
        this.width = 60
        this.height = 60
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}

// const gravity = 10

const player = new Player({
    x: canvas.width / 2,
    y: 100
})

const simpleBlock = new SimpleBlock({
    x: 300,
    y: 400
})

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'blue'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    simpleBlock.draw()

    // // gravity
    // if (player.position.y + player.height < canvas.height) {
    //     player.position.y += gravity
    // }

    if (
        player.position.x + player.width <= simpleBlock.position.x + simpleBlock.width
        // player.position.x + player.width >= simpleBlock.position.x + simpleBlock.width
    ) {
        console.log('collision is happening!!')
    }

}

animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'w':
            console.log('up')
            player.position.y -= 20
            break
        case 'd':
            console.log('right')
            player.position.x += 20
            break
        case 'a':
            console.log('left')
            player.position.x -= 20
            break
        case 's':
            console.log('down')
            player.position.y += 20
            break
    }
})