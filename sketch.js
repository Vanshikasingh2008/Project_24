var ground;
var crumbledPaper,dustbinPart1,dustbinPart2,dustbinPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	push();
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	//fill("yellow");
	pop();
 	World.add(world, ground);

	ground1 = createSprite(400,450,800,10);
	ground1.shapeColor = "yellow";

	crumbledPaper = new Paper(100,435,20);
	dustbinPart1 = new Dustbin(600,435,15,200);
	dustbinPart2 = new Dustbin(500,385,100,15);
	dustbinPart3 = new Dustbin(700,385,100,15);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  crumbledPaper.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:60,y:-60});

	}
}

