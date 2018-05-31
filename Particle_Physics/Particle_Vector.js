let walkers = [];

function setup() {
  createCanvas(400, 400);
}
function draw() {
    var s = 'Number of Walkers: '+ walkers.length;
    fill(250);
    background(0);
    text(s,10,10,150,150);
   
    let r = random();
    if(r > 0.9){
        walkers.push(new Walker());
    }
    
    for(let i = 0; i < walkers.length; i++){
        walkers[i].show();
        walkers[i].move();
        if(random(10000)<walkers[i].age){
            walkers.splice(i,1);
        }
    }
}

class Walker{
	constructor(){
		this.loc = createVector(width/2,height/2);
		this.age = 0;
	}
	
	show(){
		noStroke();
		fill(255,250,255-this.age*10);
		ellipse(this.loc.x,this.loc.y,this.age+=1/100,this.age+=1/100);
	}
	
	move(){
	    
		let move = floor(random(4));
        this.age+=1/100;
		if(move === 0){
			this.loc.add(2,0);
		} else if(move === 1){
			this.loc.add(0,-2);
		} else if(move === 2){
			this.loc.add(-2,0);
		} else {
			this.loc.add(0,2);
		}
	}
}
