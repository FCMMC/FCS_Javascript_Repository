class Box {
  float x;
  float y;
  String name;
  String r1;
  String r2;
  String r3;
  String r4;
  String r5;
  String val;
  String correctVal;
  int ranking;
  

Box (float xpos, float ypos, String n, String rank1, String rank2, String rank3, String rank4, String rank5, String value) {
  x = xpos;
  y = ypos;
  name = n;
  r1 = rank1;
  r2 = rank2;
  r3 = rank3;
  r4 = rank4;
  r5 = rank5;
  val = value;
  
}


void update() {
  
}

void display() {
  fill(255);
  rect(x,y, (width/4), height/2, 7);
  fill(0);
  textSize(15);
  text(name, x+10, y+20); 
  if(val == r1) {
    ranking = 5;
    correctVal = val;
  } else if(val == r2) {
    ranking = 4;
    correctVal = val;
  } else if(val == r3) {
    ranking = 3;
    correctVal = val;
  } else if(val == r4) {
    ranking = 2;
    correctVal = val;
  } else if(val == r5) {
    ranking = 1;
    correctVal = val;
  }
  textSize(8);
  text("If " + name+ " is "+r1 +", then rank = 5", x+5, y+40);
  text("If " + name+ " is "+r2 +", then rank = 4", x+5, y+50);
  text("If " + name+ " is "+r3 +", then rank = 3", x+5, y+60);
  text("If " + name+ " is "+r4 +", then rank = 2", x+5, y+70);
  text("If " + name+ " is "+r5 +", then rank = 1", x+5, y+80);
 
  
  text("The chosen value is " + correctVal + ", the rank is "+ranking,x+5,y+120);

  
}

}
ArrayList<Box> boxes = new ArrayList<Box>();
String eventName = "Franklin Square";
String windValue = "4-6 m/s";
String openSpaceValue = "Clearing, City";
String droneNumberValue = "300-399";
String motionComplexityValue = "3D-Dynamic";
String durationValue = "2-4 OR 16-18 min";
String eventScaleValue = "Regional";
float safetyWeight = 1.2;
float influenceWeight = 1.0;
float safetyRanking = 2.79 * safetyWeight;
float influenceRanking = 2.5 * influenceWeight;
float overallRanking = sqrt(abs(1-(safetyRanking/influenceRanking)))*100;


void setup() {
  println(overallRanking);
  size(1000,500);
  boxes.clear();
  boxes.add(new Box(0,0,"Wind Speed","0-2 m/s","2-4 m/s","4-6 m/s","6-7 m/s","7-8 m/s",windValue));
  boxes.add(new Box(width/4,0,"Open Space","Open & Clear","Trees, People","Trees, Less People","Clearing, City","Middle of Nowhere",openSpaceValue));
  boxes.add(new Box(2*width/4,0,"Drone Number","0-99","100-199","200-299","300-399","400-500",droneNumberValue));
  boxes.add(new Box(3*width/4,0,"Motion Complexity","2D-Static","2D-Dynamic","3D-Static","3D-Dynamic","No Pattern",motionComplexityValue));
  boxes.add(new Box(0,height/2,"Event Duration","8-12 min","6-8 OR 12-14 min","4-6 OR 14-16 min","2-4 OR 16-18 min","0-2 OR 18-20 min",durationValue));
  boxes.add(new Box(width/4,height/2,"Event Scale","Global","National","Regional","State","Local",eventScaleValue));
}

void draw() {
  background(255);
  for (int i = 0; i< boxes.size(); i++) {
    Box bx = boxes.get(i);
    bx.update();
    bx.display();
  }
  fill(255);
  rect(width/2,height/2,width/2,height/2, 7);
  fill(0);
  textSize(15);
  text("Prediction Result: " + eventName,width/2+10,height/2+20);
  textSize(8);
  text("The Wind Speed is: "+ windValue, width/2+10,height/2+40);
  text("The Open Space is: "+openSpaceValue, width/2+10,height/2+50);
  text("The Drone Number is:  "+droneNumberValue, width/2+10,height/2+60);
  text("The Motion Complexity is: "+motionComplexityValue, width/2+10,height/2+70);
  text("The Event Duration is: "+durationValue, width/2+10,height/2+80);
  text("The Event Scale is: "+eventScaleValue, width/2+10,height/2+90);
  text("The Safety Weight is: "+safetyWeight+" & the Influence Weight is: "+influenceWeight,width/2+10,height/2+120);
  text("The total safety value (from 1-5) is: "+ safetyRanking,width/2+10,height/2+130);
  text("The total influence value (from 1-5) is: "+ influenceRanking,width/2+10,height/2+140);
  textSize(12);
  text("The overall ranking (from 0-100%) is: "+ overallRanking,width/2+10,height/2+160);
  if(overallRanking<= 50){
  text("We DO recommend doing this show.",width/2+10,height/2+180);
  } else {
  text("We DO recommend doing this show.",width/2+10,height/2+180);

  }
  

}
