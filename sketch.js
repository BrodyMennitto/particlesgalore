let img;
let slime;
let shape;
let numberOfParticles = 1;
let particles = [];

function preload() {
img = loadImage('images/fur.png');
slime = loadImage('images/slime.png');
} 

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numberOfParticles; i++)
  {particles.push(new Particle());
    }

  
  shape = createGraphics(540, 540);
}

 function draw() {
  clear();
  //blendMode(ADD);

  background(100, 0, 200);
  frameRate(30);
  
  
  

  noTint();
  shape.fill ('rgba(0, 0, 0, 255)');
  shape.beginShape();
  shape.vertex(185, 75);
  shape.vertex(355, 75);
  shape.vertex(525, 375);
  shape.vertex(25, 375);
  shape.endShape(CLOSE);

  img.mask(shape);
  imageMode(CENTER);
  image(img, width/2, 300, 300, 300);

  //fill(255, 60, 100);
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
 // stroke(0);
  //noFill();
  let p = new Particle();
  particles.push(p);
  
  for (let i = 0; i < particles.length; i++){
  particles[i].move();
  particles[i].show();
  //if (particles[i].finished()) {
    //particles.splice(i, 1);
  //}
 }
fill (255, 0, 100);
noStroke();
triangle(200, 100, 155, 185, 245, 185);
//redraw();
}

class Particle {
  constructor(){
    this.x = 200;
    this.y = 55;
    this.xspeed = random(-3, 3);
    this.yspeed = random(3, -3);
    this.angle = createVector(random(360), random(360));
    this.alpha = 255;
    
  }

  

  //finished(){
    //return this.alpha < 0;
  //}

 move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.angle.add(this.xspeed);
    this.alpha -= 5;
  }

show() {
  //noStroke();
  tint(255, this.alpha);
  //fill(200, 0, 200, this.alpha);
  //blendMode(HARD_LIGHT);
  image(slime, this.x, this.y, 62.5, 62.5);
  //rectMode(CENTER);
  //ellipse(this.x, this.y, 17);  
}
}

