var button
var button2
var button3
var button4
var button5 
var rando
var squareX
var squareY
var x 
var y 
var r
var g
var b
var diameter

//runs reset sketcch so there is no weird button overlapping
function setup()
{
    createCanvas(800,800);    
    resetSketch();
    button = createButton('reset');
    button.position(10,10);
    button.mousePressed(resetSketch);
    

}
    
//everything that needs to update constantly 
function resetSketch()
{
    background(1)
    fill(255)
    textSize(45)
    text('What can you make?' , (width/2)-225 ,  height/2)
    button2 = createButton('Red')
    button2.position(70,10)
    button2.mousePressed(redSquare)
    button3 = createButton('Blue')
    button3.position(130,10)
    button3.mousePressed(blueSquare)
    button4 = createButton('Black')
    button4.position(190,10)
    button4.mousePressed(blackSquare)
    button5 = createButton('I am Done')
    button5.position(250,10)
    button5.mousePressed(iAmDone)


}

function draw() {
        console.log('bac')
        //assigns random value to squares x and y values
        squareX = random(1,800)
        squareY = random(1,800)
        //assigns random values to color and location of dots 
        r = random(0,255)
        g = random(0,255)
        b = random(0,255)
        x = random(0,800)
        y = random(0,800)
        noStroke();
        fill(r,0,b,100)
        circle(x,y,20)
        noStroke();
        fill(r,g,b,)
        circle(mouseX,mouseY,diameter,1000)
    }
    
//buttons
function redSquare(){
    fill(255,0,0);
    noStroke();
    rect(squareX,squareY,100,100);
}
function blueSquare(){
    fill(0,0,255);
    noStroke();
    rect(squareX,squareY,100,100);
}
function blackSquare(){
    fill(0,0,0);
    noStroke();
    rect(squareX,squareY,100,100);
}
function mousePressed(){
    diameter = random(10,80)
}
function iAmDone()
{
    textSize(45)
    stroke(123)
    text('Wow!! What a great art piece!',width-700,height/2)
    window.alert('I just wanted to thank you for teaching me how to code. I have been fascinated by Code for a while but I was never able to teach myself and you made it so much easier to comprehend. I am excited to learn more and explore this field. Happy Hollidays and I hope you have a great break!  ')
}