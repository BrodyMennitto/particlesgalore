let img;
let slime;
let shape;
let particles = [];

function preload() {
img = loadImage('images/fur.png');
slime = loadImage('images/slime.png');
} 

function setup() {
  createCanvas(500, 500);
  shape = createGraphics(500, 500);
}

 function draw() {
  clear();
  background(0);
  
  fill (200, 0, 255);
  noStroke();
  triangle (250, 20, 175, 175, 325, 175);

  shape.fill ('rgba(0, 0, 0, 255)');
  shape.beginShape();
  shape.vertex(175, 155);
  shape.vertex(325, 155);
  shape.vertex(475, 435);
  shape.vertex(25, 435);
  shape.endShape(CLOSE);

  img.mask(shape);
  imageMode(CENTER);
  image(img, width/2, height/2, 300, 300);

  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
  
  let p = new Particle();
  particles.push(p);
  for (let i = particles.length-1; i >= 2; i--){
  particles[i].update();
  particles[i].show();

   if (particles[i].finished()) {
    particles.splice(i, 1);
  }
 }
}

class Particle {
  constructor(){
    this.x = 250;
    this.y = 80;
    this.vx = random(-1, 1);
    this.vy = random(1, -1);
    this.alpha = 255;
  }

  finished(){
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1;
  }

show() {
  noStroke();
  tint(255, this.alpha);
  image(slime, this.x, this.y, 125, 125);
  //rectMode(CENTER);
  //rect(this.x, this.y, 15);
  
}
}

