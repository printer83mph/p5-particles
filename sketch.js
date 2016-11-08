var minScr;
var particles = [];

function Particle(xPos,yPos) {
  this.position = createVector(xPos,yPos);
  this.velocity = createVector(random(-5,5),random(-5,5));
  this.color = color(random(255),random(255),random(255));
  this.startTime = frameCount;
  this.draw = function() {
    this.position.add(this.velocity);
    this.velocity.add(0,0.5);
    fill(this.color);
    ellipse(this.position.x,this.position.y,minScr/20,minScr/20);
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  minScr = min(width,height);
  noStroke();
}

function draw() {
  background(0);
  p = particles.length;
  while(p--) {
    particles[p].draw();
    console.log("drew particle " + p);
    if(frameCount - particles[p].startTime > 30) {
      particles.splice(p,1);
    }
  }
  if(mouseIsPressed) {
    particles.push(new Particle(mouseX,mouseY));
  }
}