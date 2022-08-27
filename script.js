//Global variables
const gravity = 0.3
const keys = {
  a: {pressed:false},
  d: {pressed:false}
}
let lastKey

//Project setup and config main screen
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 3000
c.fillRect(0 ,0 , canvas.width, canvas.height)


class Sprite {
  constructor({position,velocity,size}){
    this.position = position
    this.velocity = velocity
    this.size = size
  }
  drawn(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50,150)
  }
  update(){
    this.drawn()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  if(this.position.y + this.size.h + this.velocity.y >= canvas.height){
    this.velocity.y = 0
    }else {
      this.velocity.y += gravity
    }
  }
}
//Intancy of Sprite created and named by "player"
const player = new Sprite({
  position:{x:100, y:100 },
  velocity:{x:0, y:0 },
  size:{w:50, h:150}  
})

const enemy = new Sprite({
  position:{x:400, y:100},
  velocity:{x:0, y:0 },
  size:{w:50, h:150 }   
})


function animate(){
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0,0,canvas.width,canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  if(keys.a.pressed && lastKey == 'a'){
    player.velocity.x = -5
  }else if (keys.d.pressed && lastKey == 'd'){
    player.velocity.x = 5
  }

}
animate()
window.addEventListener('keydown',(event) => {
  switch (event.key) {

    //W A S D Buttons
    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break;

    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 'w':
    player.velocity.y = -10
    break

    //Arrows buttons
    case 'ArrowRight':
      keys.d.pressed = true
      lastKey = 'd'
      break;

    case 'ArrowLeft':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 'ArrowUp':
    player.velocity.y = -10
    break
  }
})
window.addEventListener('keyup',(event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break;

    case 'a':
      keys.a.pressed = false
      break

    case 'ArrowRight':
    keys.d.pressed = false
    break;

    case 'ArrowLeft':
      keys.a.pressed = false
      break
  }
})
