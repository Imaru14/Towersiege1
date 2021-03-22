const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var polygon, slingshot;
var stand;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(800,250, 500, 20);

    box1 = new Box(700,200,70,70);
    box2 = new Box(920,200,70,70);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(810,160,70,70);
    box6 = new Box(810,160,70,70);
    box7 = new Box(810,160,70,70);


    polygon = new Shape(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
        background("black");
    
        noStroke();
        textSize(35)
        fill("white")
    
    Engine.update(engine);
    //strokeWeight(4);

ground.display();
stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
polygon.display();
slingshot.display();
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       polygon.trajectory = [];
       Matter.Body.setPosition(polygon.body,{x:200, y:50});
       slingshot.attach(polygon.body);
    }
}