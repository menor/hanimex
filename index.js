const canvas = document.getElementById('hanimex')
const hanimex = canvas.getContext('2d')

class Vec {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

class Rectangle {
  constructor(width, height) {
    this.position = new Vec
    this.size = new Vec(width, height)
  }
}

class Ball extends Rectangle {
  constructor() {
    super(10, 10)
    this.velocity = new Vec
  }
}

const ball = new Ball
ball.position.x = 100
ball.position.y = 100

const update = deltaTime => {
  ball.position.x += ball.velocity.x * deltaTime
  ball.position.y += ball.velocity.y * deltaTime

  hanimex.fillStyle = '#000'
  hanimex.fillRect(0, 0, canvas.width, canvas.height)

  hanimex.fillStyle = '#FFF'

  hanimex.fillRect(
    ball.position.x,
    ball.position.y,
    ball.size.x,
    ball.size.y
  )
}

update(1)
