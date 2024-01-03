const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue')
const projectile = []


function spawnEnemies() {
    setInterval(() => {
        console.log('go')
    }, 1000)
}

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