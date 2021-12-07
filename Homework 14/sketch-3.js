//x and y for character
var characterX = 100;
var characterY = 100;

//defined key codes for the kes
var W = 87;
var S = 83;
var A = 65;
var D = 68;

//x and y for a shapes
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];


var shapeXSpeeds = [];
var shapeYSpeeds = [];

//mouseshape
var mouseShapeX;
var mouseShapeY;



function setup()
{
    createCanvas(800,600);
   
    for (var i = 0; i < 50; i++)
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1); 
    shapeXs[i] = getRandomNumber (500);
    shapeYs[i] = getRandomNumber (600);
    diameters[i] = getRandomNumber (30);
    }
function draw()
{
    background(80,60,78);
    stroke(0);
    fill(0);
    character();
    characterMove();
    enemy();
    boundingBox();
    exit();
    createCharacter(299,360)
    getRandomNumber ().
    //create a circle

  
    //move shape
    shapeXs [i] -= shapeXSpeeds [i];
    shapeYs [i] -= shapeYSpeeds [i];
   //bounding box return
   if(shapeXs [i] > width)
   {
       shapeXs [i] = 0;
   }
   if(shapeXs [i] < 0)
   {
       shapeXs [i] = width;
   }
   if(shapeYs [i] > height)
   {
       shapeYs [i] = 0;
   }
   if(shapeYs [i] < 0 )
   {
       shapeYs [i] = height;
   }


}
function createCharacter (x, y)
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
    characterX = x;
    characterY = y;
}
function character()
{
    fill(18,32,92);
    circle(characterX,characterY,20);
    
}

function characterMove()
{
    if(keyIsDown(W))
    {
        characterY -=10;
    }
    if(keyIsDown(S))
    {
        characterY +=10;    
    }
    if(keyIsDown(A))
    {
        characterX -=10;
    }
    if(keyIsDown(D))
    {
        characterX +=10;
    }

}
function enemy()
{
    fill(13,145,14)
for (var i = 0; i< shapeXs.length; i++)
    circle(shapeXs [i],shapeYs [i], diameters [i])
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
}
function boundingBox()
{
    //walls
    fill(0)
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0,height-10,width-80,10);
    rect(width-10,0,10,height);
   
}

function exit()
{
    if(characterX > height+120 && characterY > width-220)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2);
       
    }

}

function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    
    }
function getRandomNumber(number) {
        return Math.floor(Math.random() * number) + 10;
    }