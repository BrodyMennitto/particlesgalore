let img;
let slime;
let drakee;
let shape;
let numberOfParticles = 10;
let particles = [];
let monsters = [slime, drakee];


function preload() {
img = loadImage('images/fur.png');
slime = loadImage('images/slime.png');
drakee = loadImage('images/drakee.png');
} 

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numberOfParticles; i++)
  {particles.push(new Particle());
    }

  
  shape = createGraphics(540, 540);
}

 function draw() {
  //clear();
  //blendMode(ADD);
  

  background(100, 0, 200);
  frameRate(15);

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
  //stroke(0);
  //noFill();
  // let p = new Particle();
  // particles.push(p);
  
  for (let i = 0; i < particles.length; i++){
  particles[i].move();
  particles[i].show();
  //if (particles[i].finished()) {
    //particles.splice(i, 1);
  //}
 }
fill(255, 0, 100);
noStroke();
triangle(200, 100, 155, 185, 245, 185);
//redraw();
}

class Particle {
  constructor(){
    //this.x = 200;
    //this.y = 60;
    this.position = createVector(200, 60);
    this.speed = p5.Vector.random2D();
    this.speed.mult(random(0, 3), random(0, 3));
    //this.speed = createVector(random(-7, 7), random(-1, 1));
    //this.xspeed = random(-7, 7);
    //this.yspeed = random(-1, 1);
    this.angle = createVector(45, 45);
    this.alpha = 255;
    this.rotationSpeed = createVector(random(0, 0.2), random(0, 0.2));
    }
    //finished(){
    //return this.alpha < 0;
  //}

 move() {
    // this.x += this.xspeed;
    // this.y += this.yspeed;
    this.position.add(this.speed);
    this.alpha -= 5;
    if (this.alpha < 0) {
      this.position = createVector(200,60);
      this.alpha = 255;
    }
  }

show() {
  //noStroke();
  tint(255, this.alpha);
  //fill(200, 0, 200, this.alpha);
  //blendMode(HARD_LIGHT);
  image(slime, this.position.x, this.position.y, 62.5, 62.5);
}
}

function mousePressed(){
 slime = drakee;
}







