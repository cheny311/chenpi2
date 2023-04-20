let url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = "New%20York";
let url2 = "&units=imperial&appid=";
let apiKey = "101a338fa877d3ba5d9613e0f104991a";
let temperature;

let img4;
let img5;
let button;
function preload(){
  img4= loadImage('lashi.png')
  img5= loadImage('chuqu.png')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(18);
  textStyle(BOLD);
  fill(255,0,115);
  loadJSON(url1 + city + url2 + apiKey, getData);
  button = createButton('What color should I wear?');
  button.style('background-color','lightblue' );
  button.position(width / 2, height / 2 + 80);
  button.hide(); 
  button.mouseClicked(goToPage);
}

function draw() {
    if (temperature >= 50 && temperature <= 60) {
        image(img5, 0, 0,windowWidth,windowHeight);
        text(`Let's go outside, the probablity of having fun is ${temperature} % `, width / 2 - 110, height / 2)
        button.show();
      } else {

        image(img4, 0, 0,windowWidth,windowHeight);
        text(`The probability of being hit by bird droppings is ${temperature} % `, width / 2 - 60, height / 2+40);
        button.hide();
      }
}

function getData(data) {
  temperature = data.main.temp;
  print(`temperature ${city} is ${temperature} °F`);
}
function goToPage() {
    // navigate to new_page.html when the button is clicked
    window.location.href = 'color.html';
  }
  
