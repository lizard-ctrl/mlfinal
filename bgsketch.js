//mixed + messed with from jcponce p5js code 


t=0
draw =_=>{
  createCanvas(c=windowWidth, r=windowHeight);

  blendMode(DIFFERENCE);
  
  
   translate(windowWidth/2,windowHeight/2);
  for(i=1;i<30;i++){
    rotate(PI/6);
    fill(255,0,0,30);
    stroke(255,0,2);
    ellipse(0,0,i*5*sin(t+PI/4*i),i*30);
  }
  t+=PI/1000;
  
}

