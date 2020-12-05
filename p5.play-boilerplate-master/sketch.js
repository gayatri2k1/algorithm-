var fixed, moving 



function setup() {
  createCanvas(800,600);
 
  fixed = createSprite(400,300,80,80)
  fixed.debug = true
  moving = createSprite(200,300,80,80)
  moving.debug = true

}

function draw() {
  background(25);
  moving.x = mouseX
  moving.y = mouseY
  
//distance b/w the rectangle
console.log(fixed.x - moving.x)
console.log(fixed.width /2 + moving.width/2)

if(fixed.x - moving.x < fixed.width /2 + moving.width/2 
  && fixed.x - moving.x < fixed.width /2 +moving.width/2
  && fixed.y - moving.y < fixed.width /2 + moving.width/2 
  && fixed.y - moving.y < fixed.width /2 +moving.width/2){
  fixed.shapeColor ="red"
  moving.shapeColor = "red"
}
else {
  fixed.shapeColor ="pink"
  moving.shapeColor = "pink"
}

  drawSprites();
}