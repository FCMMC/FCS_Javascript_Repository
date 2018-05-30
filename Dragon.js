class Drone {
  float r = 9;
  float x;
  float y;
  float z;
  float t;
  float yscale = 1;
  float xscale = 1;
  float zscale = 1;
  Drone(float td) {
    
    //x = xd;
    //y = yd;
    //z = zd;
    t = td;
  }

  void update() {
  pushMatrix();
  t+= 0.05;
  y = r*cos(t/3)*yscale;
  z = r*sin(t/3)* zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  println(t);
  scale(5.0);
  colorMode(HSB);
  stroke(10,255,abs(5*z)+50);
  point(x,y,z);
 
  popMatrix();
   }
   
   void updatea() {
  pushMatrix();
  y = r*cos(t/3)*yscale;
  z = r*sin(t/3)*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(10,255,abs(5*z)+50);
  point(x,y,z);
  if (y<-1) {
  point(x+6.4/3,y,z);
  point(x+12.45/3,y,z);
  point(x+17.8/3,y,z);
  point(x+2.33/3,y+1/3,z);
  point(x+28.2/3,y-.6/3,z);
  point(x+32/3,y-4.2/3,z);
  point(x+32.5/3,y-8.1/3,z);
  point(x+27.6/3,y-7.85/3,z);
  point(x+22/3,y-9.2/3,z);
  point(x+17.6/3,y-12/3,z);
  point(x+13.8/3,y-16.15/3,z);
  point(x+10.13/3,y-18.9/3,z);
  point(x+5.44/3,y-20.84/3,z);
  point(x+9.5/3,y-15.73/3,z);
  point(x+9.7/3,y-12/3,z);
  point(x+4.85/3,y-8.16/3,z);
  point(x,y-4.75/3,z);
  } else if (abs(y) <1.2) {
  } else {
    point(x+6.4/3,y,z);
  point(x+12.45/3,y,z);
  point(x+17.8/3,y,z);
  point(x+2.33/3,y-1/3,z);
  point(x+28.2/3,y+.6/3,z);
  point(x+32/3,y+4.2/3,z);
  point(x+32.5/3,y+8.1/3,z);
  point(x+27.6/3,y+7.85/3,z);
  point(x+22/3,y+9.2/3,z);
  point(x+17.6/3,y+12/3,z);
  point(x+13.8/3,y+16.15/3,z);
  point(x+10.13/3,y+18.9/3,z);
  point(x+5.44/3,y+20.84/3,z);
  point(x+9.5/3,y+15.73/3,z);
  point(x+9.7/3,y+12/3,z);
  point(x+4.85/3,y+8.16/3,z);
  point(x,y+4.75/3,z);
  }
  popMatrix();
   }
  
  void update1() {
  pushMatrix();
  t+= 0.05;
  y = r*cos(t/3)*0.8*yscale;
  z = r*sin(t/3)*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(10,200,abs(4*z)+50);
  point(x,y,z);
  popMatrix();
  }
  void update11() {
  pushMatrix();
  t+= 0.05;
  y = r*cos(t/3)*0.6*yscale;
  z = r*sin(t/3)*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(10,150,abs(3*z)+50);
  point(x,y,z);
  popMatrix();
  }
  
  void update2() {
  pushMatrix();
  t+= 0.05;
  y = -r*cos(t/3)*yscale;
  z = -r*sin(t/3)*0.6*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(150,255,abs(5*z)+50);  
  point(x,y,z);
  popMatrix();
  }
  
  void update2a() {
  colorMode(RGB);
  pushMatrix();
 
  y = -r*cos(t/3)*yscale;
  z = -r*sin(t/3)*0.6*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(150,255,abs(5*z)+50);  
  point(x,y,z);
  if (y<0) {
  point(x+6.4/3,y,z);
  point(x+12.45/3,y,z);
  point(x+17.8/3,y,z);
  point(x+2.33/3,y+1/3,z);
  point(x+28.2/3,y-.6/3,z);
  point(x+32/3,y-4.2/3,z);
  point(x+32.5/3,y-8.1/3,z);
  point(x+27.6/3,y-7.85/3,z);
  point(x+22/3,y-9.2/3,z);
  point(x+17.6/3,y-12/3,z);
  point(x+13.8/3,y-16.15/3,z);
  point(x+10.13/3,y-18.9/3,z);
  point(x+5.44/3,y-20.84/3,z);
  point(x+9.5/3,y-15.73/3,z);
  point(x+9.7/3,y-12/3,z);
  point(x+4.85/3,y-8.16/3,z);
  point(x,y-4.75/3,z);
  } else  if (abs(y)<1.2){
  } else {
  point(x+6.4/3,y,z);
  point(x+12.45/3,y,z);
  point(x+17.8/3,y,z);
  point(x+2.33/3,y-1/3,z);
  point(x+28.2/3,y+.6/3,z);
  point(x+32/3,y+4.2/3,z);
  point(x+32.5/3,y+8.1/3,z);
  point(x+27.6/3,y+7.85/3,z);
  point(x+22/3,y+9.2/3,z);
  point(x+17.6/3,y+12/3,z);
  point(x+13.8/3,y+16.15/3,z);
  point(x+10.13/3,y+18.9/3,z);
  point(x+5.44/3,y+20.84/3,z);
  point(x+9.5/3,y+15.73/3,z);
  point(x+9.7/3,y+12/3,z);
  point(x+4.85/3,y+8.16/3,z);
  point(x,y+4.75/3,z);
  }
  popMatrix();
  }
  
  void update3() {

    pushMatrix();
  t+= 0.05;
  y = -r*cos(t/3)*0.8*yscale;
  z = -r*sin(t/3)*0.6*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5.0);
  colorMode(HSB);
  stroke(150,200,abs(4*z)+50);  
  point(x,y,z);
  popMatrix();
  }
  void update31() {
  pushMatrix();
  t+= 0.05;
  y = -r*cos(t/3)*0.6*yscale;
  z = -r*sin(t/3)*0.6*zscale;
  x = t*(1/tan(PI/6))*xscale;
  translate(x,y,z);
  scale(5);
  colorMode(HSB);
  stroke(150,150,abs(3*z)+50);  
  point(x,y,z);
  popMatrix();
  }
  
  
  
//  void display() {
//   sphere(300);
//}
  
}
ArrayList<Drone> drones = new ArrayList<Drone>();
ArrayList<Drone> drones1 = new ArrayList<Drone>();
ArrayList<Drone> drones11 = new ArrayList<Drone>();
ArrayList<Drone> drones2 = new ArrayList<Drone>();
ArrayList<Drone> drones3 = new ArrayList<Drone>();
ArrayList<Drone> drones31 = new ArrayList<Drone>();

void setup() {
  colorMode(HSB);
  size(1250,600,P3D);      
  drones.clear();
  drones1.clear();
  drones11.clear();
  drones2.clear();
  drones3.clear();
  drones31.clear();
  for (float t = 0; t <= 50; t+=1) {
    drones.add(new Drone(t));
    drones1.add(new Drone(t));
    drones11.add(new Drone(t));
    drones2.add(new Drone(t));
    drones3.add(new Drone(t));
    drones31.add(new Drone(t));
  }
  
  
}

void draw() {
  background(0);
  translate(width/6,height/2);
  for (int i = 0; i < drones.size(); i++){
    Drone dr = drones.get(i);
    Drone dra = drones.get(drones.size() - 1);
    Drone dr1 = drones1.get(i);
    Drone dr11 = drones11.get(i);
    Drone dr2 = drones2.get(i);
    Drone dr2a = drones2.get(drones.size() - 1);
    Drone dr3 = drones3.get(i);
    Drone dr31 = drones31.get(i);

    dr.update();
    dra.updatea();
    dr1.update1();
    dr11.update11();
    dr2.update2();
    dr2a.update2a();
    dr3.update3();
    dr31.update31();
    stroke(55,75,(20%(i+1))*10);
        scale(5);
    point(dra.x+70,0);
    stroke(100,100,100);
    scale(0.2);
    colorMode(RGB);
  }
if (keyPressed == true) {
    if (key == 'r') {
      setup();
    }
  }
}
