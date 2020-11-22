var wall,wallImg
var car,car2,car3,car4,carImg1,carImg2,carImg3,carImg4
var RUN
var PLAY=1
var STATE=RUN
var backgroundImg
var speed
var mass
var run,runImg;
var damage;


function preload(){
  backgroundImg=loadImage("backgroundImg.png");
  carImg1=loadImage("whitecar.png");
  carImg2=loadImage("greencar.png");
  carImg3=loadImage("yellowcar.png");
  carImg4=loadImage("redcar.png");
  wallImg=loadImage("wall.png");
  runImg=loadImage("next.png");

}

function setup() {
  createCanvas(1000,500);
  speed=Math.round(random(1,700))
  mass=Math.round(random(20,60))
  wall=createSprite(850,height/2,10,10);
  wall.addImage("wall",wallImg);
  wall.scale=0.63;
  car=createSprite(width/10,height/1.3,10,10);
  car.addImage("car1",carImg1);
  car.scale=0.5;
  car2=createSprite(10,10,10,10);
  car2.addImage("car2",carImg2);
  car2.scale=0.5;
  car2.visible=false;
  car3=createSprite(10,10,10,10);
  car3.addImage("car3",carImg3);
  car3.scale=0.5;
  car3.visible=false;
  car4=createSprite(10,10,10,10);
  car4.addImage("car4",carImg4);
  car4.scale=0.5;
  car4.visible=false;
  run=createSprite(200,height/3.5,10,10);
  run.addImage("run",runImg);
  run.scale=2;
  run.visible=true;
  damage=0.5*mass*speed*speed/22509;

}

function draw() {
  //console.log("car : "+car.y)
  car2.visible=false;
  car3.visible=false
  car4.visible=false;
  background(backgroundImg);  
  console.log(car.velocityX)

  if(STATE===RUN){
   
    if(mousePressedOver(run)&&STATE===RUN){
      STATE=PLAY;
     }
  }

  if(STATE===PLAY){
    car.velocityX=speed
    run.visible=false;
    car2.x=car.x;
    car2.y=car.y;
    car3.x=car.x;
    car3.y=car.y;
    car4.x=car.x;
    car4.y=car.y;
    
    if(isTouching(wall,car) && damage<100){
        car.velocityX=0;
        car.visible=false;
        car.x=810
        car.y=384.6153846153846;
        car2.visible=true;
        car3.visible=false
        car4.visible=false;

    }

    if(isTouching(wall,car) && damage>100 && damage<220){
      car.velocityX=0;
      car.visible=false;
      car.x=810
      car.y=384.6153846153846;
      car2.visible=false;
      car3.visible=true
      car4.visible=false;

  }

  if(isTouching(wall,car) && damage>200){
    car.velocityX=0;
    car.visible=false;
    car.x=810
    car.y=384.6153846153846;
    car2.visible=false;
    car3.visible=false
    car4.visible=true;

  }
       
        
  }

 
    

    drawSprites();
    if(STATE===PLAY){
    fill("white");
    stroke("white");
    stroke(20);
    textSize(35);  
    text("Speed  :  "+Math.round(speed)+("    ||"),100,50);
    text("Mass : "+Math.round(mass)+("    ||"),400,50);
    text("Deformation : "+Math.round(damage),650,50);
    }
}


function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
    return true;
  
}
else {
  return false;
}
}
