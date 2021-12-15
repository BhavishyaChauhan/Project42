var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);
  

  hrAngle = map(hr, 0, 23, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);  
  

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(400,400)

  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr %12,  0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360); 

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,200,0);
  pop();
  drawSprites();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,100,0);
  pop();

  noFill();
  strokeWeight(10);

  stroke(0,255,0);
  arc(0,0,480,480,0,scAngle)

  stroke(255,0,0);
  arc(0,0,460,460,0,mnAngle)

  stroke(0,0,255);
  arc(0,0,440,440,0,hrAngle)
}