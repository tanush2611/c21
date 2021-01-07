var w;
var e;

function setup() {
  createCanvas(800,400);
  w=createSprite(400, 200, 50, 50);
e=createSprite(300,200,20,20);
e.velocityX=2;
}

function draw() {
  background(255,255,255);  
  
  
 if(isTouching(e,w)){
   w.shapeColor="red";
   e.shapeColor="red";
 e.velocityX=0;
  }
  else{
    w.shapeColor="green";
   e.shapeColor="green";
  }
  
  drawSprites();
}





