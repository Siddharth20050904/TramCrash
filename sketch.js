const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var sling1 , sling2;
var rock1;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1 = new boggie(500,350,100,50);
  
  boggie2 = new boggie(350,350,100,50);

  boggie3 = new boggie(200,350,100,50);

  boggie4 = new boggie(50,350,100,50)

  sling1 = new SlingShot(boggie1.body , boggie2.body);

  sling2 = new SlingShot(boggie2.body, boggie3.body);

  sling3 = new SlingShot(boggie3.body, boggie4.body)

  rock1 = new Rock(1000,350,150,110);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();

  sling1.display();
  sling2.display();
  sling3.display();

  rock1.display();
  trainMove();
  }

  function trainMove(){
    if(keyWentDown("RIGHT_ARROW")){
      Matter.Body.applyForce(boggie1.body,boggie1.body.position,{x:1,y:0});
      trainSound.play();
    }
  }