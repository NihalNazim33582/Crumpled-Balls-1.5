
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;

var dustBinObj,dustBinImage;
var paper,paperImage;
var ground;	

function preload(){

	dustBinImage = loadImage("dustbingreen.png")

	paperImage = loadImage("paper.png")

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustBinObj=new Dustbin(1200,650);
	dustBinObj.addImage("dustBin",dustBinImage)

	paper=new Paper(200,450,40);
	paper.addImage("crumpledPaper",paperImage)

	ground=new Ground(width/2,670,width,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 // dustBinObj.display();
  paper.display();
  ground.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}
