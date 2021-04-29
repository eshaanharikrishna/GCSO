var car,wall,speed,weight 
 function setup() {
  createCanvas(1200,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1000,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  //car.shapeColor="white"
  //wall.shapeColor="grey"
  car.velocityX=speed
}

function draw() {

  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor="red"
      
    }
    else if(deformation>100&&deformation<180){
      car.shapeColor="yellow"
    }
    else{
      car.shapeColor="green"
    }
  }
  
  drawSprites();
}