const World = Matter.World; 
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var myWorld, myEngine; 
var ground; 
var ball;
var groundOptions = {
   isStatic : true, 
  }; 
  var balloptions={
    restitution:0.9,
  };
function setup() {
  createCanvas(400,400);
   //createSprite(0, 0, 50, 50);
  myEngine = Engine.create(); 
  //myWorld is myEngine's world
  myWorld = myEngine.world;
  ground = Bodies.rectangle(200,350,100,20,groundOptions); 
  ball=Bodies.circle(200,150,40,balloptions);
  World.add(myWorld,ground); 
  World.add(myWorld,ball);
  console.log(ball); 
}
function draw(){
  background("yellow"); 
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("blue")
  rect(ground.position.x,ground.position.y,400,50);
  fill("red")
  circle(ball.position.x,ball.position.y,40);
        //drawSprites(); 
}
        
