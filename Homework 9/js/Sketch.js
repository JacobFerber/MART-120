function setup()
{
    createCanvas(500,500);
}
function draw()
{
    background(50,50,250);
    strokeWeight(5)
  
    fill(4,180,60)//green//
    ellipse(250,500,600,90)//horizon//
  
  
    fill(253,233,104)
    ellipse(250,70,140,150)
  
  
    fill(253,217,151) //tan//
    circle(250,80,100); //head//
    
  
    fill(20)//black//
    rect(170,130,160,200)//torso//
    rect(330,130,40,160)//right arm//
    rect(130,130,40,160);//left arm//
  
    fill(300);
    textSize(28);
    text('NIKE', 250,200)//NIKE//
    textSize(15);
    text('Jacob Ferber',10,20);
    
  
    line(250,70,260,90)
    line(260,90,250,90)//nose//
    
    line(230,100,270,100)
    arc(250,100,40,30,0,3.14);//smile//
    
    //arm//
    triangle(135,150,165,150,148,270)
    //hands//
    fill(253,217,151)
    triangle(367,290,332,290,332,330)
    triangle(132,290,167,290,167,330)
  
  
  
    fill(70,157,191)//denim//
    rect(170,330,40,160) //left leg//
    rect(290,330,40,160) //right leg// 

  strokeWeight(10)
  point(230,70) 
  point(270,70)

  
}