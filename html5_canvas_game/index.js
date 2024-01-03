const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'blue')
const projectile = []
const enemies = []


function spawnEnemies() {
    setInterval(() => {
        const radius = Math.random() * (40 - 10) + 10
        let x
        let y
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }

        const color = 'green'
        const angle = Math.atan2(
            canvas.height / 2 - y,
            canvas.width / 2 - x
        )

        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x, y, radius, color, velocity))
        console.log(enemies)
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    player.draw()

    projectile.forEach((projectile) => {
        projectile.update()
    })

    enemies.forEach((enemy) => {
        enemy.update()
    })
}

window.addEventListener('click', (event) => {

    // set the velocity for projectiles 
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
spawnEnemies()