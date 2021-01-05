const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var engine;
var world;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,20);

    box1 = new Box(620,560,40,40);
    box2 = new Box(660,560,40,40);
    box3 = new Box(700,560,40,40);
    box4 = new Box(740,560,40,40);
    box5 = new Box(780,560,40,40);
    box6 = new Box(640,520,40,40);
    box7 = new Box(680,520,40,40);
    box8 = new Box(720,520,40,40);
    box9 = new Box(760,520,40,40);
    box10 = new Box(660,480,40,40);
    box11 = new Box(700,480,40,40);
    box12 = new Box(740,480,40,40);
    box13 = new Box(680,440,40,40);
    box14 = new Box(720,440,40,40);
    box15 = new Box(700,400,40,40);

    ball = new Ball(400,480,40);

    rope = new Rope(ball.body,{x:470,y: 250});

}

function draw(){
background("grey");
Engine.update(engine);
ground.display();

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

ball.display();

rope.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
