
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,40,500,20)
	circle1 = new Circle(200,470,100)
	circle2 = new Circle(300,470,100)
	circle3 = new Circle(400,470,100)
	circle4 = new Circle(500,470,100)
	circle5 = new Circle(600,470,100)
  rope1 = new Rope(circle1.body,roof.body,-100*2,0);
  rope2 = new Rope(circle2.body,roof.body,-50*2,0);
  rope3 = new Rope(circle3.body,roof.body,-0*2,0);
  rope4 = new Rope(circle4.body,roof.body,50*2,0);
  rope5 = new Rope(circle5.body,roof.body,100*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  rectMode(CENTER);
  Engine.update(engine)
  
  roof.display();
  circle1.display();
  circle2.display()
  circle3.display()
  circle4.display()
  circle5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  keyPressed();
  drawSprites();
 
}

