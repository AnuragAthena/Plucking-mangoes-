
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;
var stone;
var chain;
var tree;
var treeImg;
var boyImg;
function preload()
{
  treeImg = loadImage("tree.png")
  boyImg= loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

// 	var options ={
//         stiffness: 0.004,
// 		length : 10
// }
// chain = Constraint.create(options); 
	//Create the Bodies Here.
// boy = new Boy(250, 950, 170, 170)
mango1 = new Mango(1250, 520, 50);
mango2 = new Mango(1090, 560, 50);
mango3 = new Mango(1380, 520, 50);
mango4 = new Mango(1450, 590, 50);
mango5 = new Mango(1250, 450, 50);
mango6 = new Mango(1180, 560, 50);
ground = new Ground(750, 980, 1500, 40);
// tree = new Tree(1250, 740, 200, 500)



stone= new Stone(184, 865, 40, 40);
tree = createSprite(1250, 670);
  tree.addImage(treeImg)
  tree.scale = 0.5
chain = new Chain(stone.body, {x : 184, y: 865})
	Engine.run(engine);
  
}


function draw() {
//   rectMode(CENTER);
  background("lightblue");
 

  // tree.display();
 
  //  boy.display(); 
   text("x :" +mouseX +"y :"+mouseY, mouseX, mouseY )
      
   chain.display();
   drawSprites();
   imageMode(CENTER)
   image(boyImg, 250, 920, 200, 200);
  //  mango1.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display();  
  mango6.display();  
  
  stone.display();
  ground.display();  

}
   
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(stone.body, {x:184, y:865})
chain.attach(stone.body)
}

function detectollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
// console.log(distance)
// console.log(lmango.r)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body ,false)
}
}


