const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var ground1
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var bl1, bl2, bl3, bl4, bl5, bl6, bl6, bl7, bl8, bl9, bl10, bl11, bl12, bl13, bl14;
var Plg
var sling1

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground();
  stand1 = new Stand (390,300,250,10);
  stand2 = new Stand (700,200,200,10);
 
  //nivel uno
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);


  //niveluno uno

bl1=new Block(630, 175, 30,40)
bl2=new Block(660, 175, 30, 40)
bl3=new Block(690, 175, 30, 40)
bl4=new Block(720, 175, 30, 40)
bl5=new Block(750, 175, 30, 40)
bl6=new Block(630,135, 30, 40)
bl7=new Block(750, 135, 30, 40)
bl8=new Block(690, 135, 30, 40)

bl10=new Block(630, 95, 30, 40)
bl11=new Block(750, 95, 30, 40)
bl12=new Block(690, 95, 30, 40)


Plg=new Poligono(50, 200, 20)

sling1=new Slingshot(Plg.body, {x:100, y:200})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground1.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
fill("turquoise");
bl1.display();
bl2.display();
bl3.display();
bl4.display();
bl5.display();

fill("grey")
bl6.display();
bl7.display();
bl8.display();



fill("skyblue");
bl10.display();
bl11.display();
bl12.display();

Plg.display();
sling1.display();

}


function mouseDragged(){
  Matter.Body.setPosition(Plg.body ,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling1.fly()

}

function keyPressed(){
  if(keyCode === 32){
      sling1.attach(Plg.body)
  }
}

