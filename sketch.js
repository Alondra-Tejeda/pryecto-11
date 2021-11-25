var sea,seaimg;
var ship,shipani;

function preload(){
seaimg=loadImage("sea.png");
shipani=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
}

function setup(){
  createCanvas(700,580);
  sea= createSprite(700,290,30,30);
  sea.addImage(seaimg);
  sea.scale=0.35;

  ship= createSprite(350,300,20,20);
  ship.addAnimation("ship",shipani);
  ship.scale=0.2;
}

function draw() {
  background("blue");

  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}