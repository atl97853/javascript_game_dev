const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

let player = new Player()
// const platforms = [new Platform({ x: 200, y: 100 }), new Platform({ x: 500, y: 200 })]
let platforms = [
    new Platform({
        x: -1,
        y: 470,
        imageSrc: './assets_mario_game/platform.png',
    }),
    new Platform({
        x: 500,
        y: 470,
        imageSrc: './assets_mario_game/platform.png',
    }),
    new Platform({
        x: 540 * 2 + 100,
        y: 470,
        imageSrc: './assets_mario_game/platform.png',
    }),
]

let genericObjects = [
    new GenericObjects({
        x: -1,
        y: -1,
        imageSrc: './assets_mario_game/background.png',
    }),
    new GenericObjects({
        x: -1,
        y: -1,
        imageSrc: './assets_mario_game/hills.png',
    }),
]


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    },
}

let scrollOffset = 0

function init() {

    player = new Player()
    // const platforms = [new Platform({ x: 200, y: 100 }), new Platform({ x: 500, y: 200 })]
    platforms = [
        new Platform({
            x: -1,
            y: 470,
            imageSrc: './assets_mario_game/platform.png',
        }),
        new Platform({
            x: 500,
            y: 470,
            imageSrc: './assets_mario_game/platform.png',
        }),
        new Platform({
            x: 540 * 2 + 100,
            y: 470,
            imageSrc: './assets_mario_game/platform.png',
        }),
    ]

    genericObjects = [
        new GenericObjects({
            x: -1,
            y: -1,
            imageSrc: './assets_mario_game/background.png',
        }),
        new GenericObjects({
            x: -1,
            y: -1,
            imageSrc: './assets_mario_game/hills.png',
        }),
    ]
}
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(object => {
        object.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        // platforms scroll feature
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x -= 5
            })
            genericObjects.forEach((genericObjects) => {
                genericObjects.position.x -= 3
            })
        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x += 5
            })
            genericObjects.forEach((genericObjects) => {
                genericObjects.position.x += 3
            })
        }
    }
    // collision detection between player and platform 
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    // win condition 
    // console.log(scrollOffset)
    if (scrollOffset > 2000) {
        console.log('you win')
    }
    // lose condition
    if (player.position.y > canvas.height) {
        init()
    }
}


animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            keys.left.pressed = true
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            keys.right.pressed = true
            break
        case 'w':
            console.log('up')
            player.velocity.y -= 20
            break
    }
    console.log(keys.right)
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            keys.left.pressed = false
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            keys.right.pressed = false
            break
        case 'w':
            console.log('up')
            break
    }
    console.log(keys.right)
})

