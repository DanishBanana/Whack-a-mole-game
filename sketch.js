var bg,bgImg;
var hammer, hammerImg;
var mole1, mole2, moleImg1, moleImg2;
var mole3, mole4, moleImg3, moleImg4;
var mole5, mole6, moleImg5, moleImg6;
var mole7, mole8, moleImg7, moleImg8;



function preload(){
  
  moleImg1 = loadImage("no_mole_dirt.png")
  moleImg2 = loadAnimation( "Mole_dirt.png", "Mole_blink_dirt.png")
  hammerImg = loadImage("assets/hammer.png")

  bgImg = loadImage("assets/background.png")

  moleImg3 = loadImage("no_mole_dirt.png")
  moleImg4 = loadAnimation( "Mole_dirt.png", "Mole_blink_dirt.png")

  moleImg5 = loadImage("no_mole_dirt.png")
  moleImg6 = loadAnimation( "Mole_dirt.png", "Mole_blink_dirt.png")

  moleImg7 = loadImage("no_mole_dirt.png")
  moleImg8 = loadAnimation( "Mole_dirt.png", "Mole_blink_dirt.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(500,300,1200,600)
bg.addImage(bgImg)
bg.scale = 0.7

  

//creating the player sprite
hammer = createSprite(600,300, 50, 50);
 hammer.addImage(hammerImg)
   hammer.scale = 0.4
   hammer.debug = true
   hammer.setCollider("rectangle",-200,-30,200,210)

mole1 = createSprite(200,300, 50, 50);
mole1.addImage(moleImg1)
mole1.scale = 0.3
 //mole.debug = true
 mole1.setCollider("rectangle",0,10,500,300);
 mole2= createSprite(200,270,50,50);
 mole2.addAnimation("coming_mole",moleImg2);
 mole2.scale = 0.3;
 mole2.visible=true;
 mole1.visible=false;

 mole3 = createSprite(400,480, 50, 50);
mole3.addImage(moleImg3)
mole3.scale = 0.3
 mole4= createSprite(400,450,50,50);
 mole4.addAnimation("running_mole",moleImg4);
 mole4.scale = 0.3;
 mole4.visible=true;
 mole3.visible=false;

 mole5 = createSprite(500,300, 50, 50);
mole5.addImage(moleImg5)
mole5.scale = 0.3
 mole6= createSprite(500,270, 50, 50);
 mole6.addAnimation("happy_mole",moleImg6);
 mole6.scale = 0.3;
 mole6.visible=true;
 mole5.visible=false;


 mole7 = createSprite(700,200, 50, 50);
 mole7.addImage(moleImg7)
 mole7.scale = 0.3
  mole8= createSprite(700,170, 50, 50);
  mole8.addAnimation("birthday_mole",moleImg8);
  mole8.scale = 0.3;
  mole8.visible=true;
  mole7.visible=false;
 
}

function draw() {
  background(0); 
 hammer.x= World.mouseX;
 hammer.y= World.mouseY;

  if(hammer.isTouching(mole2)) {
    mole2.visible= false
    mole1.visible= true
  }
  if(hammer.isTouching(mole4)) {
    mole4.visible= false
    mole3.visible= true
  }
  if(hammer.isTouching(mole6)) {
    mole6.visible= false
    mole5.visible= true
  }
  if(hammer.isTouching(mole8)) {
    mole8.visible= false
    mole7.visible= true
  }

  //moving the player up and down and making the game mobile compatible using touches

drawSprites();

}
