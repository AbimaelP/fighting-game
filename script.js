//Project setup and config main screen
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
c.fillRect(0 ,0 , canvas.width, canvas.height)

const gravity = 0.3
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

console.log(player)

function animate(){
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0,0,canvas.width,canvas.height)
  player.update()
  enemy.update()
}
animate()