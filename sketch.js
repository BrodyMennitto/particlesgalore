let img;
let slime;
let shape;
let total = 5;
let particles = [];

function preload() {
img = loadImage('images/fur.png');
slime = loadImage('images/slime.png');
} 

function setup() {
  createCanvas(500, 500);
  shape = createGraphics(540, 540);
}

 function draw() {
  clear();
  blendMode(ADD);
  background(100, 0, 200);
  
  fill (75, 75, 0);
  noStroke();
  triangle (250, 100, 205, 185, 295, 185);

  shape.fill ('rgba(0, 0, 0, 255)');
  shape.beginShape();
  shape.vertex(195, 175);
  shape.vertex(345, 175);
  shape.vertex(495, 455);
  shape.vertex(45, 455);
  shape.endShape(CLOSE);

  img.mask(shape);
  imageMode(CENTER);
  blendMode(ADD);
  image(img, width/2, height/2, 300, 300);

  //fill(255, 60, 100);
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  //stroke(0);
  //noFill();
  
  let p = new Particle();
  particles.push(p);
  for (let i = particles.length-1; i >= 0; i--){
  particles[i].update();
  particles[i].show();

   //if (particles[i].finished()) {
    //particles.splice(i, 1);
  //}
 }
}

class Particle {
  constructor(){
    this.x = 250;
    this.y = 98;
    this.vx = random(-8, 8);
    this.vy = random(8, -8);
    this.alpha = 255;
  }

  finished(){
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -=5;
  }

show() {
  noStroke();
  fill(200, 0, 200, this.alpha);
  blendMode(HARD_LIGHT);
  //image(slime, this.x, this.y, 125, 125);
  //rectMode(CENTER);
  ellipse(this.x, this.y, 17);
  
}
}

