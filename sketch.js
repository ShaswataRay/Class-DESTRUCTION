const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;


function setup() {
  createCanvas(windowWidth,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth/2, 780, windowWidth, 20);
  bob = new Ball(600, 600, 35);
  chain = new Chain(bob.body, {x:600, y:50});
  
  // House 1 {
  // house side 1
  block1 = new Block(700, 500);
  block2 = new Block(700, 450);
  block3 = new Block(700, 400);
  block4 = new Block(700, 350);
  block5 = new Block(700, 300);
  block6 = new Block(700, 250);
  block7 = new Block(700, 200);
  block8 = new Block(700, 150);
  block9 = new Block(700, 100);
  block10 = new Block(700,50);
 
  //house side 2
  blockA = new Block(750, 500);
  blockB = new Block(750, 450);
  blockC = new Block(750, 400);
  blockD = new Block(750, 350);
  blockE = new Block(750, 300);
  blockF = new Block(750, 250);
  blockG = new Block(750, 200);
  blockH = new Block(750, 150);
  blockI = new Block(750, 100);
  blockJ = new Block(750, 50);
  
//}

// house 2{
// house side 1
  block11= new Block(850, 260);
  block22= new Block(850, 230);
  block33= new Block(850, 200);
  block44= new Block(850, 190);
  block55= new Block(850, 160);
  block66= new Block(850, 130);
  
// house side 2 
  blockAA = new Block(900, 260);
  blockBB = new Block(900, 230);
  blockCC = new Block(900, 200);
  blockDD = new Block(900, 190);
  blockEE = new Block(900, 160);
  blockFF = new Block(900, 130);

  // }

  // house 3{
  // house side 1
  block111 = new Block(1000, 800);
  block222 = new Block(1000, 750);
  block333 = new Block(1000, 700);
  block444 = new Block(1000, 650);
  block555 = new Block(1000, 600);
  block666 = new Block(1000, 550);
  block777 = new Block(1000, 500);
  block888 = new Block(1000, 450);
  block999 = new Block(1000, 400);
  block1000 = new Block(1000, 350);
  block1100 = new Block(1000, 300);
  block1200 = new Block(1000, 250);
  block1300 = new Block(1000, 200);
  block1400 = new Block(1000, 150);
  block1500 = new Block(1000, 100);
  

 
  //house side 2
  blockAAA = new Block(1050, 800);
  blockBBB = new Block(1050, 750);
  blockCCC = new Block(1050, 700);
  blockDDD = new Block(1050, 650);
  blockEEE = new Block(1050, 600);
  blockFFF = new Block(1050, 550);
  blockGGG = new Block(1050, 500);
  blockHHH = new Block(1050, 450);
  blockIII = new Block(1050, 400);
  blockJJJ = new Block(1050, 350);
  blockKKK = new Block(1050, 300);
  blockLLL = new Block(1050, 250);
  blockMMM = new Block(1050, 200);
  blockNNN = new Block(1050, 150);
  blockOOO = new Block(1050, 100);

  // }

Engine.run(engine);
}

function draw() {
  background(0);  
 
  ground.display();
  bob.display();
  chain.display();

  //house 1{
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  
 

  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
  blockH.display();
  blockI.display();
  blockJ.display();
  
// }

// house 2{
  block11.display();
  block22.display();
  block33.display();
  block44.display();
  block55.display();
  block66.display();

  blockAA.display();
  blockBB.display();
  blockCC.display();
  blockDD.display();
  blockEE.display();
  blockFF.display();
// }

  //house 3{
    block111.display();
    block222.display();
    block333.display();
    block444.display();
    block555.display();
    block666.display();
    block777.display();
    block888.display();
    block999.display();
    block1000.display();
    block1100.display();
    block1200.display();
    block1300.display();
    block1400.display();
    block1500.display();
   
    blockAAA.display();
    blockBBB.display();
    blockCCC.display();
    blockDDD.display();
    blockEEE.display();
    blockFFF.display();
    blockGGG.display();
    blockHHH.display();
    blockIII.display();
    blockJJJ.display();
    blockKKK.display();
    blockLLL.display();
    blockMMM.display();
    blockNNN.display();
    blockOOO.display();
    
  // }

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob.body, bob.body.position, {x:-200, y:-200})
}
}