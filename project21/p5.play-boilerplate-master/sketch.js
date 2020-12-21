var wall,thickness;
var bullet,speed, weight;



function setup() {
 var canvas= createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

 bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX=speed;
 bullet.shapeColor="grey";

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
 if(collide(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="green";
  }

 }
  
  
  


  drawSprites();
}

function collide(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;
}