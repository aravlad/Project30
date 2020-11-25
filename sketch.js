
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
    polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground1 = new Ground(600,690,1200,10);
    ground2 = new Ground(600,350,400,10);

    box1 = new Box(600, 320, 40, 60);
    box2 = new Box(600, 320, 40, 60);
    box3 = new Box(600, 320, 40, 60);
    box4 = new Box(600, 320, 40, 60);
    box5 = new Box(600, 320, 40, 60);
    box6 = new Box(600, 320, 40, 60);
    box7 = new Box(600, 320, 40, 60);
    box8 = new Box(600, 280, 40, 60);
    box9 = new Box(600, 280, 40, 60);
    box10 = new Box(600, 280, 40, 60);
    box11 = new Box(600, 280, 40, 60);
    box12 = new Box(600, 280, 40, 60);
    box13 = new Box(600, 240, 40, 60);
    box14 = new Box(600, 240, 40, 60);
    box15 = new Box(600, 240, 40, 60);
    box16 = new Box(600, 200, 40, 60);

  polygon = Bodies.circle(50, 200, 20)
  World.add(world, polygon)

slingshot = new Slingshot(this.polygon,{x:100, y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)

text(mouseX+","+mouseY, mouseX, mouseY)




  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
slingshot.attach(polygon);

  }


}
