let particles = [];

function setup() {
  createCanvas(400, 400);
  }

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);
  for (let i = 0; i < particles.length; i++){
  particles[i].update();
  particles[i].show();
 }
}

class Particle {
  constructor(){
    this.x = width/2;
    this.y = 390;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

show() {
  noStroke();
  fill(255, 50);
  rectMode(CENTER);
  rect(this.x, this.y, 40);
  
}
}

