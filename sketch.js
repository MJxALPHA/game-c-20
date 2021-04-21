var fixedBox;
var controllableBox;

var cat,catSilent; 
var mouse,mouseN;

function preload(){
  cat = loadImage("cat1.png");
  mouse = loadImage("mouse2.png");
  //
  catSilent = loadImage("cat2.png");
  mouseN = loadImage("mouse1.png");
}

function setup() {
  createCanvas(800,400);
  //fixed one
  fixedBox = createSprite(400, 200, 50, 50);
  controllableBox = createSprite(100, 200, 50, 50);
  //
  fixedBox.scale = 0.2;
  //
  controllableBox.scale = 0.2;
}

function draw() {
  background(25,255,255);  
  controllableBox.x = World.mouseX;
  controllableBox.y = World.mouseY;

  if (fixedBox.x - controllableBox.x < controllableBox.width/2 + fixedBox.width/2
    && controllableBox.x - fixedBox.x < controllableBox.width/2 + fixedBox.width/2
    && fixedBox.y - controllableBox.y < controllableBox.height/2 + fixedBox.height/2
    && controllableBox.y - fixedBox.y < controllableBox.height/2 + fixedBox.height/2){
     fixedBox.addImage(cat);
     controllableBox.addImage(mouse);
   }else {  
    fixedBox.addImage(catSilent);
    fixedBox.changeImage(catSilent);
    //
    controllableBox.addImage(mouseN);
    controllableBox.changeImage(mouseN);
   }

  drawSprites();
}