var movingRect, fixedRect

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(200, 600, 40, 90);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(200,100,90,40);
  fixedRect.shapeColor = "red";

  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
}

function draw() {
  background(255,255,255);  

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    //movingRect.shapeColor = "blue";
    ///fixedRect.shapeColor = "blue";
    movingRect.velocityX = movingRect.velocityX * (-1); 
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    //movingRect.shapeColor = "blue";
    //fixedRect.shapeColor = "blue";
    movingRect.velocityY = movingRect.velocityY * (-1); 
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  drawSprites();
}