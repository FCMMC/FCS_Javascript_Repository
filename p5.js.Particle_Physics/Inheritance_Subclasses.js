let particles = new Array(10);
let blueparticles = new Array(10);
var snowballSize = 40;
var snowmanX = 425;
var eyeSize = 4;
var distanceFromCenter = 3.5;
let smokepart = new Array(10);
let bsmokepart = new Array(10);



function setup() {
    createCanvas(500, 500);
    background(0);
    
    smokepart = smokepart.fill().map(() => new Smoke());
    bsmokepart = bsmokepart.fill().map(() => new blackSmoke());
    particles = particles.fill().map(() => new Particle());
    blueparticles = blueparticles.fill().map(() => new blueParticle());

}

function draw() {
    
    particles.push(new Particle());
    blueparticles.push(new blueParticle());
    smokepart.push(new Smoke());
  	bsmokepart.push(new blackSmoke());
  	
    fill(255, 255, 255);
ellipse(snowmanX, height-20, snowballSize, snowballSize);

fill(255, 255, 255);
ellipse(snowmanX, height-45, 0.8 * snowballSize, 0.8 * snowballSize);

fill(255, 255, 255);
ellipse(snowmanX, height-65, 0.6 * snowballSize, 0.6 *snowballSize);

fill(153, 40, 40);
ellipse(snowmanX, height-40, 5, 5);
ellipse(snowmanX, height-25, 5, 5);

fill(255, 119, 0);
triangle(snowmanX, height-64, snowmanX, height-60, snowmanX+10, height-62);

ellipse(snowmanX - distanceFromCenter, height-67, eyeSize, eyeSize);
ellipse(snowmanX + distanceFromCenter, height-67, eyeSize, eyeSize);
            
background(0);
fill(255, 255, 255);
ellipse(snowmanX, height-20, snowballSize, snowballSize);

fill(255,255,255);
rect(25,400,200,100);
triangle(25,400,225,400,122,350);
rect(170,350,15,40);

fill(255, 255, 255);
ellipse(snowmanX, height-45, 0.8 * snowballSize, 0.8 * snowballSize);

fill(255, 255, 255);
ellipse(snowmanX, height-65, 0.6 * snowballSize, 0.6 *snowballSize);

fill(153, 40, 40);
ellipse(snowmanX, height-40, 5, 5);
ellipse(snowmanX, height-25, 5, 5);

fill(255, 119, 0);
triangle(snowmanX, height-64, snowmanX, height-60, snowmanX+10, height-62);

ellipse(snowmanX - distanceFromCenter, height-67, eyeSize, eyeSize);
ellipse(snowmanX + distanceFromCenter, height-67, eyeSize, eyeSize);

    particles = particles.filter(p => !p.done());
    blueparticles = blueparticles.filter(p => !p.done());
    smokepart = smokepart.filter(m => !m.kill());
    bsmokepart = bsmokepart.filter(q => !q.kill());

    for (let p of particles) {
        p.show();
        p.update();
    }
    
    for (let b of blueparticles) {
        b.show();
        b.update();
    }
    
    for (let s of smokepart) {
        s.show();
        s.update();
    }
    
    for (let bs of bsmokepart) {
        bs.show();
        bs.update();
    }
}

class Particle{
    constructor(){
        this.pos = createVector(randomGaussian(width/2,200),-10);
        this.vel = createVector(0,random(-5,5));
        this.acc = createVector(0,0.1);
        this.age = 255;
    }
    
    update(){      
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
        this.age-=2;
    }
    
    show(){
        noStroke();
        fill(255,this.age);
        ellipse(this.pos.x,this.pos.y,15,15);
    }
    
    done(){
        return (this.pos.y > height || this.pos.x < 0 || this.pos.x > width ||this.age<-100);
    }
}

class blueParticle extends Particle{   
    show(){
        noStroke();
        fill(255,255,255);
        ellipse(this.pos.x,this.pos.y,10,10);
    }
    
}

class Smoke{
    constructor(){
        this.pos = createVector(177, 346);
        this.vel = createVector(random(-1, 1), random(-2, -3));
      	this.age = 1;
      	this.cloud = 100;
    }
    update(){
        this.vel.limit(10);
        this.pos.add(this.vel);
      	this.age += 2;
        this.cloud -= 2;
    }
    
    show(){
        noStroke();
        fill(130, this.cloud);
        ellipse(this.pos.x,this.pos.y,10,10);
    }
    
    kill() {
        return (this.pos.y < 0 || this.age > 50 || this.age>150);
    }
}

class blackSmoke extends Smoke{
    show(){
        noStroke();
        fill(190, this.cloud);
        ellipse(this.pos.x,this.pos.y,10,10);
    }
}
