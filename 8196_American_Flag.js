class Drone {

  float x;
  float y;
  float theta;
  float n = 0;
  float d;
  float color1;
  float color2;

  Drone(float angle, float xp, float yp, float down) {
    //theta = angle;
    x = xp;
    y = 0.6*yp;
    color1 = down/30;
    color2 = yp;
    d = down;
  }

  void update() {
    y += .1;
  }



  void display() {
    stroke(255);
    strokeWeight(0);
    if (color2 % 2 == 1 && abs(color1)%2==1 && color2 <11 && abs(color1) <9) {
      fill(255, 255, 255);
      ellipse(x, 10*sin(y)-2*d*7/9, 3.82, 3.82);
    } else if (color2 % 2 == 0 && color1%2==0 && color2 <11 && abs(color1) <9) {
      fill(255, 255, 255);
      ellipse(x, 10*sin(y)-2*d*7/9, 3.82, 3.82);
    } else if (color2 < 11 && abs(color1) < 9) {
      fill(25, 25, 200);
      ellipse(x, 10*sin(y)-2*d*7/9, 3.82, 3.82);
    } else if (abs(color1)%2==1) {
      fill(255, 255, 255);
      if (abs(color1) ==9) {
        println(9);
        ellipse(x, 10*sin(y)-2*(d+60), 3.82, 3.82);
      }
      ellipse(x, 10*sin(y)-2*d, 3.82, 3.82);
    } else {
      fill(200, 25, 25);
      if (abs(color1) ==10) {
        println(10);
        ellipse(x, 10*sin(y)-2*(d+60), 3.82, 3.82);
      }
      ellipse(x, 10*sin(y)-2*d, 3.82, 3.82);
    }
  }
}
ArrayList<Drone> drones = new ArrayList<Drone>();
int distanceBetweenDrones = 40;

void setup() {
  fullScreen();
  colorMode(RGB);
  //frameRate(15);
  drones.clear();
  for (int j = 0; j <=24; j++) {
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,0));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-30));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-60));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-90));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-120));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-150));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-180));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-210));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-240));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-270));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-300));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-330));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-360));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-390));
    drones.add(new Drone(0,-50 + (j*distanceBetweenDrones),j,-420));

    

    
  }
  background(0);
}
void draw() {
  background(0);
  translate(width/2-400,height/2-350);
  for (int i = 0; i < drones.size(); i++) {
   Drone dr = drones.get(i);
   dr.update();
   dr.display();
  }
  if (keyPressed == true) {
    if (key == 'r') {
      setup();
    }
  }
}
