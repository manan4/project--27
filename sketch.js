const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope;
var bobDiameter=60;


function preload()
{
	
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(380,400,30);
	bob2 = new Bob(440,400,30);
	bob3 = new Bob(500,400,30);
	bob4 = new Bob(560,400,30);
	bob5 = new Bob(620,400,30);
	roof = new Roof(500,100,400,30);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightgrey");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
  textSize(30);
 fill ("black");
  text("Please press 'up arrow key' to start.",250,30);
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:-500})
	}
}

