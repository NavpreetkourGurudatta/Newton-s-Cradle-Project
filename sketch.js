const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bod2,bod3,bod4,bod5
var string1,string2,string3,string4,string5
function preload(){
    
}

function setup(){
    createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse:canvasmouse
}
mConstraint = MouseConstraint.create(engine.options)
World.add(world,mConstraint); 
 
    Engine.run(engine);  
    bob1 = new Pendulum(640,580,white);  
   bob2 = new Pendulum(600,580,white);
    bob3 = new Pendulum(560,580,white)
    bob4 = new Pendulum(520,580,white)
    bob5 = new Pendulum(480,580,white);
    string1 = new Sling(Pendulum,bod1);
    string2 = new Sling(Pendulum,bod1);
    string3 = new Sling(Pendulum,bod1);
    string4 = new Sling(Pendulum,bod1);
    string5 = new Sling(Pendulum,bod1);

}

function draw(){
    rectMode(CENTER);
	background(220);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

}   

