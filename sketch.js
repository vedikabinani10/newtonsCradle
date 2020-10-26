const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,600);
	bobObject2 = new Bob(400,600);
	bobObject3 = new Bob(500,600);
	bobObject4 = new Bob(600,600);
	bobObject5 = new Bob(700,600);

	roofObject = new Roof(400,400,250,20);

	rope1 = new Rope(bobObject1.body,roofObject.body,-250,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-150,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-50,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,50,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,150,0);
  
}


function draw() {
  background(200);
  rectMode(CENTER);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
	
  roofObject.display();
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:0});
	 }
 }


