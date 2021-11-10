


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




function setup()
{
    createCanvas(500,500);
    
}
function draw()
{
    background(50,50,250);
    strokeWeight(5);
  
    fill(4,180,60);//green//
    ellipse(250,500,600,90);//horizon//
  
  
    fill(253,233,104);
    ellipse(250,70,140,150);
  
  
    fill(253,217,151);//tan//
    circle(headX,headY,100); //head'
    headX+=headDirection;
    if(headX >= 418 || headX <= 82);
    {
       headDirection *= -1;
    }
    
  
    fill(20);//black//
    rect(bodyX,bodyY,160,200);//torso//
    bodyY+=bodyDirection;
    if(bodyY >= 250 || bodyY <= 100);
    {
        bodyDirection *= -1;
    }

    rect(rightarmX,rightarmY,40,160);//right arm//
    if(rightarmX <= 400);
    {
        rightarmX+=3;
    }

    rect(leftarmX,leftarmY,40,160);//left arm//
    if(leftarmX <= 300);
    {
      leftarmX+=3;
    }

    fill(300);
    textSize(28);
    text('NIKE', 250,200)//NIKE//
    textSize(15);
    text('Jacob Ferber',10,20);
    
    
  
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
    rect(170,330,40,160); //left leg//
    rect(290,330,40,160); //right leg// 

    strokeWeight(10);
    point(230,70); 
    point(270,70);


}