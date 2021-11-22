//circle
var x = 50;
var y = 50;
var diameter = 25;

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
var shapeXSpeed;
var shapeYSpeed;

var shape1X = 30;
var shape1Y = 62;
var shape1XSpeed;
var shape1YSpeed;

var shape2X = 80;
var shape2Y = 36;
var shape2XSpeed;
var shape2YSpeed;
//mouseshape
var mouseShapeX;
var mouseShapeY;

var mouseX
var mouseY

function setup()
{
    createCanvas(800,600);
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
    circle(shapeX,shapeY,20)
    fill(60,145,255)
    circle(shape1X,shape1Y,60)
    fill(260,120,65)
    circle(shape2X,shape2Y,40)
}
function boundingBox()
{
    //walls
    fill(0)
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0,height-10,width-80,10);
    rect(width-10,0,10,height);
    //bounding box
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5 )) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    shape1X -= shape1XSpeed;
    shape1Y += shape1YSpeed;
    
    shape2X -= shape2XSpeed;
    shape2Y -= shape2YSpeed;

    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0 )
    {
        shapeY = height;
    }

    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0 )
    {
        shape1Y = height;
    }

    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0 )
    {
        shape2Y = height;
    }

    if(characterX > width)
    {
        characterX = 0;
    }
    if(characterX < 0)
    {
        characterX = width;
    }
    if(characterY > height)
    {
        characterY = 0;
    }
    if(characterY < 0 )
    {
        characterY = height;
    }

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

//create a circle
fill(120,130,140);
circle(mouseShapeX, mouseShapeY, 25);
function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    
    }








