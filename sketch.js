 var fundo;
 var fogueteImg,foguete;

function preload(){
 fogueteImg=loadImage("laser.png");
 
}

function setup() {
 createCanvas(400,400);   
 foguete=createSprite(200,310);
 foguete.addImage(fogueteImg);
}

function draw() {
 drawSprite();
}

