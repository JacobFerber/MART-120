
var headX = 250;
var headY = 80;
var headDirection = 1;

var bodyX = 170;
var bodyY = 130;
var bodyDirection = 1;

var leftarmX = 130;
var leftarmY =130;

var rightarmX = 330;
var rightarmY = 130;

var rightlegX =290;
var rightlegY =330;

var leftlegX = 170
var leftlegY = 330

var movement = Math.floor(Math.random() * 4) + 1;
var movement1 = Math.floor(Math.random() * 4) + 1;
var movement2 = Math.floor(Math.random() * 4) + 1;
var movement3 = Math.floor(Math.random() * 4) + 1;
var movement4 = Math.floor(Math.random() * 4) + 1;
var movement5 = Math.floor(Math.random() * 4) + 1;
var movement6 = 5
var movement7 = Math.floor(Math.random() * 4) + 1;

var sizeDirection = 2;
var size = 28;
var count = 0;


function setup()
{
    createCanvas(500,500);
    
}
function draw( )
{  
  background(50,50,250);
  strokeWeight(5);
  
  fill(4,180,60);//green
  ellipse(250,500,600,90);//horizon
  
  
  fill(253,233,104);
  ellipse(250,70,140,150);
  
  
  fill(253,217,151);//tan
  circle(headX,headY,100); //head
  if(headX >= 400 || headX <= 100)
  {
     movement6 *= -1;
  }
  {
   headX += movement6;
  }




  fill(20);//black
  rect(bodyX,bodyY,160,200); //torso
  if(bodyY >= 400 || bodyY <= 100)
  {
     movement7 *= -1;
  }
  {
   bodyY += movement7;
  }
  
  rect(rightarmX,rightarmY,40,160);//right arm
  if(rightarmX >= 400 || rightarmX <= 0)
    {
       movement1 *= -1;
    }
    {
     rightarmX += movement1;
    }

  rect(leftarmX,leftarmY,40,160);//left arm
  if(leftarmX >= 500 || leftarmX <= 0)
    {
       movement2 *= -1;
    }
    {
     leftarmX += movement2;
    }

    fill(300);
    textSize(28);
    text('NIKE', 250,200)//NIKE
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 140)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Jacob Ferber',10,30);
    
    
  
    line(250,70,260,90);
    line(260,90,250,90);//nose//
    
    line(230,100,270,100);
    arc(250,100,40,30,0,3.14);//smile//
    
    //arm//
    triangle(135,150,165,150,148,270);
    //hands//
    fill(253,217,151);
    triangle(367,290,332,290,332,330);
    triangle(132,290,167,290,167,330);
    
  
  
  
    fill(70,157,191);//denim//
    rect(leftlegX,leftlegY,40,160); //left leg//
    if(leftlegX >= 400 || leftlegX <= 50)
    {
       movement4 *= -1;
    }
    {
     leftlegX += movement4;
    }
    if(leftlegY >=400 || leftlegY <=50)
    {
      movement4 *= -1;
    }
    {
     leftlegY += movement4;
    }


    rect(rightlegX,rightlegY,40,160); //right leg// 
    if(rightlegY >= 400 || rightlegY <= 100)
    {
       movement5 *= -1;
    }
    {
     rightlegY += movement5;
    }

    strokeWeight(10);
    point(230,70); 
    point(270,70);


}