//defining a variable to store the number of clicks
var clicks = 0;
let pg;
function setup() {
 createCanvas(windowHeight,windowWidth);
 pg = createGraphics(100, 100);
  //get the reset button element from the HTML document
  var resetButton = select('#reset-button');
  
  //add an event listener to the button element
  resetButton.mousePressed(resetClicks);
}

function draw() {
  //background(100);
 // pg.background(100,100,100,0);

  //text formatting

  noStroke();
  textSize(80);
  textAlign(CENTER, CENTER);
 
  fill(255,0,255);
  rectMode(CENTER);
  rect(width / 2, height / 2, textWidth(clicks.toString()) + 20, textSize() + 20,20);
 
  //displaying number of clicks
  fill(25);
  text(clicks, width/2, height/2);


  
}

//function is called when user clicks
function mousePressed() {
    clear();
  //add 1 to variable clicks
  clicks ++;
 
}

//function to reset the clicks variable to zero
function resetClicks() {
  clicks = 0;
}
