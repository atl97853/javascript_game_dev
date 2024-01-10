const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const player = new Player({
    x: canvas.width / 2,
    y: 100,
    width: 40,
    height: 40,
    color: 'black',
})

const simpleBlock = new SimpleBlock({
    x: 500,
    y: 200,
    width: 60,
    height: 60,
    color: 'red',
})

function onCollision(objA, objB) {
    // objA = player 
    // objB = simpleBlock
    if (
        objA.position.x + objA.width >= objB.position.x &&
        objA.position.x <= objB.position.x + objB.width &&
        objA.position.y + objA.height >= objB.position.y &&
        objA.position.y <= objB.position.y + objB.height
    ) {
        console.log('collision is happening!!')
    }
}

let gravity = 0
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'blue'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    simpleBlock.draw()

    // gravity
    if (player.position.y <= canvas.height - (player.height * 2)) {
        console.log('gravity')

        player.position.y += gravity
        gravity += 2
        console.log(gravity)
    } else {
        gravity = 2
    }
    onCollision(player, simpleBlock)
}

animate()

addEventListener('keydown', ({ key }) => {
    const velocity = 20
    switch (key) {
        case 'w':
            console.log('up')
            player.position.y -= velocity * 10
            break
        case 'd':
            console.log('right')
            player.position.x += velocity
            break
        case 'a':
            console.log('left')
            player.position.x -= velocity
            break
        // case 's':
        //     console.log('down')
        //     player.position.y += velocity
        //     break
    }
})