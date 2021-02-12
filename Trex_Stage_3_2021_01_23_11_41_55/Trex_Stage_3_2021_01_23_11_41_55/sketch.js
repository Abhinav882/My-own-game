
var gameState = "start";

var Bird, BirdImage1,BirdImage2, BirdImage3;
var ground, invisibleGround, groundImage;

var coinsGroup, coinImage;
var PipesGroup, Pipe, Pipe2, Pipe3, Pipe4 ;
var dieSound,  CoinSound, wingSound ;
var button, buttonImg;
var score=0;

var gameOver, restart;


function preload(){
  
  
  groundImage = loadImage("Ground2.jpg");
  
  
  buttonImg = loadImage("button.png");
  Pipe1Img = loadImage("Pipe1.png");
  Pipe2Img = loadImage("Pipe2.png");
  Pipe3Img = loadImage("Pipe3.png");
  Pipe4Img = loadImage("Pipe4.png");
  BirdImage1 = loadImage("Bird.png");
  coinImage = loadImage("Coins.png");
 
  dieSound = loadSound("Sounds/sfx_die.wav")
  
  CoinSound = loadSound("Sounds/sfx_point.wav")
  wingSound = loadSound("Sounds/sfx_wing.wav")
 // gameOverImg = loadImage("gameOver.png");
  //restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800,800)
  
  ground = createSprite(400,300,80,80);
  ground.addImage("ground",groundImage);
ground.scale = 4.5
 
  ground.velocityX = -3
  Bird = createSprite(200,100,20,20);
  Bird.addImage(BirdImage1)
  Bird.scale = 0.5

  Coin1 = createSprite(350,100,20,20);
  Coin1.velocityX = -3;
 Coin2 = createSprite(650,400,20,20);
 Coin2.velocityX = -3;
 Coin1.addImage(coinImage)
 Coin1.scale = 0.3
  Coin2.addImage(coinImage)
  Coin2.scale = 0.3
    button = createSprite(400,400)        
 button.addImage(buttonImg)
 Pipe = createSprite(800,510,10,40);

  Pipe.scale = 1.5
Pipe.velocityX = -3 
Pipe.addImage(Pipe1Img);

 Pipe4 = createSprite(500,595,10,40);

Pipe4.scale = 1.5
Pipe4.velocityX = -3 
Pipe4.addImage(Pipe4Img);

Pipe2 = createSprite(650,110,10,40);

Pipe2.scale = 1.5
Pipe2.velocityX = -3 
Pipe2.addImage(Pipe2Img);

Pipe3 = createSprite(300,85,10,40);

Pipe3.scale = 1.5
Pipe3.velocityX = -3 
Pipe3.addImage(Pipe3Img);
  score = 0;
  Pipe.debug =  false
  Pipe2.debug =  false
  Pipe3.debug =  false
  Pipe4.debug = false
  Bird.debug = false
Pipe.setCollider("rectangle",0,0,50,200)
Pipe2.setCollider("rectangle",0,0,50,160)
Pipe3.setCollider("rectangle",0,0,50,100)
Pipe4.setCollider("rectangle",0,0,50,100)
Bird.setCollider("rectangle",0,0,50,50)
Bird.visible = false
Pipe.visible = false
Pipe2.visible = false
Pipe3.visible = false
Pipe4.visible = false
Coin1.visible = false
Coin2.visible = false
}

function draw() {
 
  background(255);
 if(gameState ==="start"){
  text("Press Start To Start",400,200)
if(mousePressedOver(button)){
  gameState = "play"

}
 }
  
  if (gameState==="play"){
    button.visible = false
    Bird.visible = true
Pipe.visible = true
Pipe2.visible =true
Pipe3.visible = true
Pipe4.visible = true
Coin1.visible = true
Coin2.visible = true
  if (ground.x <100){
    ground.x = 400
  }
    ground.depth = 0
  
  if(Pipe.x<-15){
    Pipe.x = 530;
  }
  if(Pipe4.x<-15){
    Pipe4.x = 530;
  } 

  if(Pipe2.x<-15){
    Pipe2.x = 530;
  }
  if(Pipe3.x<-15){
    Pipe3.x = 530;
  }
  if(Coin1.x<-15){
    Coin1.x = 400;
  }
  if(Coin2.x<-15){
    Coin2.x = 550;
  }
  if(keyDown("space")){
    Bird.velocityY =-10 
    wingSound.play();
  }
  Bird.velocityY = Bird.velocityY+1;
 
  if(Bird.isTouching(Coin1) ) {
    score+=1
  Coin1.x = 900;
  CoinSound.play();
    }
  if(Bird.isTouching(Coin2) ) {
    score+=1
    Coin2.x = 900;     
CoinSound.play();
  }
  Pipe.depth = Coin1.depth
  Pipe2.depth = Coin1.depth
  Pipe3.depth = Coin1.depth
  Pipe4.depth = Coin1.depth
  Coin1.depth = Coin1.depth+1
  
  if(Bird.isTouching(Pipe)||Bird.isTouching(Pipe2)||Bird.isTouching(Pipe3)|| Bird.isTouching (Pipe4)){
    console.log("abcd")
    gameState = "end"
dieSound.play();


  }
  }
  else if (gameState === "end") {
   score = 0
    Bird.velocityX = 0
    Bird.velocityY = 0
    Coin1.velocityX = 0
    Coin2.velocityX = 0    
    //set velcity of each game object to 0
    ground.velocityX = 0;
 Pipe.velocityX= 0
 Pipe2.velocityX= 0
 Pipe3.velocityX= 0
 Pipe4.velocityX= 0
    }
  
  
  
    drawSprites();
  textSize(30)
  fill("red")
  text("Score: "+ score, 500,50);
}



