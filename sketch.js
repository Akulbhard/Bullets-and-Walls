var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  
  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor =  color(255,0,0);

    }

    if(damage<10){

      wall.shapecolor = color(0,255,0);
    }

  }
  drawSprites();
}

function hascollided(bullet,wall){

  bulletrightedge = bullet.x + bullet.width;
  wallleftedge = wall.x;

  if(bulletrightedge>=wallleftedge){

     return true;
  }
     return false

}