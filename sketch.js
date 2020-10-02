const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,600);
	bobObject2 = new Bob(350,600);
	bobObject3 = new Bob(400,600);
	bobObject4 = new Bob(450,600);
	bobObject5 = new Bob(500,600);

	roofObject = new Roof(400,400,250,20);

	rope1 = new Rope(bobObject1.body,{x:300,y:400});
	rope2 = new Rope(bobObject2.body,{x:350,y:400});
	rope3 = new Rope(bobObject3.body,{x:400,y:400});
	rope4 = new Rope(bobObject4.body,{x:450,y:400});
	rope5 = new Rope(bobObject5.body,{x:500,y:400});
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
  keyPressed();
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:-5});
	 }
 }


