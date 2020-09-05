//namespace world, engine and bodies 
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops = 50;
var drops = [];
var thunder, thunderImg1;
var thunderCreatedFrame = 0;
// var thunder_anim;

function preload(){
   // thunder_anim = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
   thunderImg1 = loadImage("images/1.png");
   thunderImg2 = loadImage("images/2.png");
   thunderImg3 = loadImage("images/3.png");
   thunderImg4 = loadImage("images/4.png");
}

function setup(){
   var canvas = createCanvas(400,700);
   //create physcis engine
   engine = Engine.create();
   world = engine.world;

   //create an object using the umbrella class
   umbrella = new Umbrella(width/2 - 20,500);

 
   // thunder.addAnimation("lightning",thunder_anim);
  
}

function draw(){
   background(9, 10, 6);
    //update engine
    Engine.update(engine);

    //display umbrella 
    umbrella.display();

    //push drops with random x and y position to the drop array
    for(var i=0; i<maxDrops; i=i+30){
      drops.push(new Drops(random(0,400),random(0,400)));
    }

    //display drops
    for(var p=0; p<drops.length; p++){
       drops[p].display();
    }
   
    //update drops
    for(var q=0; q<drops.length; q++){
       drops[q].update();
    }

    if(frameCount %80 === 0){
      thunderCreatedFrame = frameCount;
      thunder = createSprite(200,80,10,10);
      var rand = Math.round(random(1,4));
      switch(rand){
         case 1: thunder.addImage(thunderImg1);
                break;
         case 2: thunder.addImage(thunderImg2);
                break;
         case 3: thunder.addImage(thunderImg3);
                break;
         case 4: thunder.addImage(thunderImg4);
                break;
         default: break;
       }
       
  
      thunder.scale = 0.3;
   } 
   if(thunderCreatedFrame +10 === frameCount && thunder){
      // if(frameCount % 10 === 0){
         thunder.destroy();
    } 

    drawSprites();
 }  

function lightning(){
    //create thunder
}