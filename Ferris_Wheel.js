class Drone {
  
  float theta_vel;
  float theta_acc;
  float theta;
  float x;
  float y;
  float r;
  int c;

  Drone(float rt, float tht, float tvel, float tacc, int colo) {
    c = colo;
    theta = tht;
    r = rt;
    x = r * cos(theta);
    y = r * sin(theta);
    theta_vel = tvel;
    theta_acc = tacc;
  }
  
  void update() {
   c++;
   if (c==5) {
     c = 0 ;
   }
   theta_vel += theta_acc;
   theta += theta_vel;  
   x = r * cos(theta);
   y = r * sin(theta);
  }
  
  
  
  void display() {
   colorMode(RGB);
   //stroke(255);
   //strokeWeight(0);
   if (c==0) {
     fill(200,50,50);
     println(0);
     ellipse(x,y,5,5);
   } else if (c==1) {
     fill(50,200,50);
     println(1);
     ellipse(x,y,5,5);
   } else if (c==2) {
     fill(50,50,200);
     println(2);
     ellipse(x,y,5,5);
   } else {
     fill(100,200,0);
     println(3);
     ellipse(x,y,5,5);
   }
  }
  
}

ArrayList<Drone> drones = new ArrayList<Drone>();
ArrayList<DroneSupport> dronessupport = new ArrayList<DroneSupport>();

float vel = -0.06;

void setup() {
  drones.clear();
  vel = -0.06;
  fullScreen(P3D);
  for (int j = 0; j <=96; j++) {
    if (j<=16) {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, 0, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9, vel, 0,k%4));
      }
    } else if (j<=32) {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, PI/3, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9 + PI/3, vel, 0,k%4));
      } 
    } else if (j<=48) {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, 2*PI/3, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9 + 2*PI/3, vel, 0,k%4));
      }
    } else if (j<=64) {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, PI, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9 + PI, vel, 0,k%4));
      }
    } else if (j<=80) {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, 4*PI/3, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9 + 4*PI/3, vel, 0,k%4));
      }
    } else {
      for (int k = 0; k <=15; k++) {
        drones.add(new Drone(25 * k, 5*PI/3, vel, 0,k%4));
        drones.add(new Drone(400, (k+1)/PI/4.9 + 5*PI/3, vel, 0,k%4));
      }
    }

    for (int i = 1; i <21; i++) {
      dronessupport.add(new DroneSupport(10*i, 20*i));
      dronessupport.add(new DroneSupport(-10*i, 20*i));
    }
    background(0);
  }
}

void draw() {
  background(0);
  translate(width/2, height/2);
  for (int i = 0; i < drones.size(); i++) {
    Drone dr = drones.get(i);
    dr.update();
    dr.display();
  }
  for (int i = 0; i < dronessupport.size(); i++) {
    DroneSupport dr = dronessupport.get(i);
    dr.update();
    dr.display();
  }

  if (keyPressed == true) {
    if (key == 'r') {
      setup();
    } 
    //else if (key == 'l') {
      //vel = 0;
      //rotate(HALF_PI);
      //translate(0,-width);
    //}
  }
}
