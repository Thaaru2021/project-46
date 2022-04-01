var asteroid,aImg,aGrp;
var rocket,rocketImg;
var fuel,fuelImg,fGrp;
var score = 1;
var bg,bgImg

function preload(){
  aImg = loadImage("asteroid.png");
  rocketImg = loadImage ("strrocket.png")
  fuelImg = loadImage("fuel.png")
  bgImg = loadImage("bg.jpg")
}


function setup() {
  createCanvas(1500,800);
  
  //creating rocket 
  rocket = createSprite(750,600);
  rocket.addImage(rocketImg);

  //creating asteroid
  asteroid = createSprite(200,200,10,10);
  asteroid.addImage(aImg);
  asteroid.scale = 0.35;
  asteroid.velocityY = 2;
 if(rocket.isTouching(asteroid)){
 aGrp.destroyeach();

 }
  //creating fuel
  fuel = createSprite(500,400)
  fuel.addImage(fuelImg);
  fuel.scale = 0.30;
  fuel.velocityY = 2;

  fGrp = new Group();
  aGrp = new Group();
}


function spawnAsteroid(){

if(frameCount%200===0){
asteroid = createSprite(random(1500,400),200,30,30)
asteroid.addImage(aImg);
asteroid.scale=0.55;
asteroid.velocityY=2;
aGrp.add(asteroid);
}}

function spawnFuel (){

  if(frameCount%150===0){
    fuel = createSprite(random(1500,400),200,30,30)
    fuel.addImage(fuelImg);
    fuel.scale=0.35;
    fuel.velocityY=2;
    fGrp.add(fuel);
  }
}

function draw() {
  background(1500,800);  
  background("cyan")
  
rocket.x = World.mouseX;
  
  //if(keyDown("LEFT_ARROW")){
  //rocket.addImage(rocketImg);
  //rocket.x = rocket.x - 30;
  //}
    
  //if(keyDown("RIGHT_ARROW")){
  //rocket.addImage(rocketImg);
  //rocket.x = rocket.x + 30;
  //}

    edges= createEdgeSprites();
    rocket.collide(edges);
  
    spawnAsteroid();
    spawnFuel();
    drawSprites();
 }