var bgImg;
var mario,walking1,walking2,walking3,jumping;
var invisibleGround;
var monster,monsterImg;
var pipe,pipeImg;
var coin,coin2,coin3,coin4,coinImg;
var brick,brickImg;

function preload(){

  bgImg=loadImage("bg.png");
  walking1=loadAnimation("mario_walking1.png");
  walking2=loadAnimation("mario_walking2.png");
  walking3=loadAnimation("mario_walking3.png");
  jumping=loadAnimation("mario_jumping.png");
  monsterImg=loadImage("monster.png");
  pipeImg=loadImage("green.png")
  coinImg=loadImage("coin.png");
  brickImg=loadImage("brick.jpg");


}
function setup() {
  createCanvas(800,400);

  invisibleGround = createSprite(400,340,800,10);
 invisibleGround.visible = false;

 mario=createSprite(10,310,10,10);
 mario.addAnimation("walk1",walking1);
 mario.scale=0.4;

 monster=createSprite(600,310,10,10);
 monster.addImage(monsterImg);
monster.velocityX=-2;
monster.scale=2.5

pipe=createSprite(300,310,10,10);
pipe.addImage(pipeImg);
pipe.scale=0.2;

coin=createSprite(470,165,10,10);
coin.addImage(coinImg);
coin.scale=0.2;

coin2=createSprite(300,260,10,10);
coin2.addImage(coinImg);
coin2.scale=0.2;

coin3=createSprite(400,165,10,10);
coin3.addImage(coinImg);
coin3.scale=0.2;

coin4=createSprite(540,165,10,10);
coin4.addImage(coinImg);
coin4.scale=0.2;

brick=createSprite(470,200,10,10);
brick.addImage(brickImg);
brick.scale=0.6
 
}

function draw() {
  background(bgImg);  

  mario.collide(invisibleGround);
  mario.collide(pipe);
  monster.collide(pipe);
  mario.collide(brick)

  if(keyDown("LEFT_ARROW")){
    mario.x=mario.x-4
    mario.addAnimation("walk1",walking1);
    mario.changeAnimation("walk1");

  }
  if(keyDown("RIGHT_ARROW")){
   mario.x=mario.x+4
   mario.addAnimation("walk2",walking2);
   mario.changeAnimation("walk2");

   mario.addAnimation("walk3",walking3);
   mario.changeAnimation("walk3");
  
  }
  
  if(keyDown("UP_ARROW")&& mario.y >= 100){
    mario.velocityY=-10;
    mario.addAnimation("jump",jumping);
    mario.changeAnimation("jump");
     
  }
  mario.velocityY = mario.velocityY + 0.8

  drawSprites();
}