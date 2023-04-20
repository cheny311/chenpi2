let url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = "New%20York";
let url2 = "&appid=";
let apiKey = "101a338fa877d3ba5d9613e0f104991a";
let weatherDescription;
let img1,img2,img3;

function preload() {
    img1 = loadImage('clear.png');
    img2 = loadImage('cloud.png');
    img3 = loadImage('rain.png')
  }
function setup() {
  createCanvas(1920,1080);
  textSize(18);
  fill(255,0,155);
  textStyle(BOLD);
  loadJSON(url1 + city + url2 + apiKey, getData);
}

function draw() {
  background(185, 20, 222);
  // text(`It is ${weatherDescription} right now`, width / 2 - 90, height / 2);
   if (weatherDescription) {
    if (weatherDescription.includes("clear")) {
    image(img1,0,0);
      text(`It is clear and sunny right now`, width / 2 - 120, height / 2);
    } else if (weatherDescription.includes("cloud")) {
        image(img2,0,0);
      text(`It is cloudy right now`, width / 2 - 70, height / 2);
    } else if (weatherDescription.includes("rain")) {
      text(`It is raining right now`, width / 2 - 70, height / 2);
      image(img3,0,0);
    } else {
      text(`It is ${weatherDescription} right now`, width / 2 - 90, height / 2);
    }
  } else {
    text("Loading weather data...", width / 2 - 100, height / 2);
  }
}

function getData(data) {
  weatherDescription = data.weather[0].description;
  
  print(data.weather[0].description);
}