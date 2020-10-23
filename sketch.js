function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 30, 80);
  hi = createSprite(500,300,20,20);
}

function draw() {
  background("gray");  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (isTouching(hi,movingrect)){
    hi.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }else {
    hi.shapeColor = "lightblue";
    movingrect.shapeColor = "lightblue";
  }
  drawSprites();
}

