let font;

let w, h;
w = 1280 / 2;
h = 720 / 2;


let boxWidth = 100;
let boxHeight = 300;
let letterSize = 16;
let letterHeight = letterSize + 4;
let particles;

// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

let x1, x2, x3, x4, y1, y2, y3, y4;
let x = w/2 - boxWidth*.5;
let y = h/2 - boxHeight*.5;

function preload() {
  font = loadFont("fonts/HelveticaNowDisplay-Light.ttf");
}

function setup() {
  
  createCanvas(w, h);

  /* x1 = w * random(0.05, 0.3);
  x2 = w * random(0.2, 0.6);
  x3 = w * 0.7;
  x4 = w * random(0.7, 0.9);

  y1 = h * 0.3;
  y2 = h * random(0, 1.5);
  y3 = -y2;
  y4 = h * 0.9; */

  // background(222);
  

  mic = new p5.AudioIn();
  mic.start();

  textSize(letterSize);
  textFont(font);

   
  let text = new TextBox(str, x, y, boxWidth, boxHeight, letterHeight, letterSize);
  // randomBezierCurve(x, y, boxWidth, boxHeight);
  particles = text.getWordParticles();
}


function getPoints(x_coordinates, y_coordinates) {
  listOfPoints = []
  for (let i = 0; i < 100; i+=1/100) {
    let coord_x = bezierPoint(x_coordinates[0], x_coordinates[1], x_coordinates[2], x_coordinates[3], i);
    let coord_y = bezierPoint(y_coordinates[0], y_coordinates[1], y_coordinates[2], y_coordinates[3], i);
    listOfPoints.push([coord_x, coord_y]);
  }
  return listOfPoints;
}

function randomBezierCurve(x, y, boxWidth, boxHeight) {
  // extremidades da box de texto
  options = [[x, y], [x + boxWidth, y]]
  rand_index = int(random(0, 2));
  // print("option: " + rand_index);
  
  x1 = options[rand_index][0];
  y1 = options[rand_index][1];

  if (rand_index == 0) {
    x2 = random(x, x + boxWidth / 2)
    y2 = random(y, boxHeight)
  
    x3 = random(x + boxWidth / 2, boxWidth)
    y3 = random(y, boxHeight) + 100
  }

  else {
    x2 = random(x + boxWidth / 2, boxWidth)
    y2 = random(y, boxHeight/2) + 100
  
    x3 = random(x, x + boxWidth / 2)
    y3 = random(y, boxHeight)
  }

  if (rand_index == 0) {
    x4 = x + boxWidth;
    y4 = y + boxHeight; 
  }

  else {
    x4 = x;
    y4 = y + boxHeight; 
  }

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}

let n = 0;
let dir = 1;
let numRepetitions = 2;




let init = true;


function draw() {
  background(0);
  noFill();
  stroke(255);
  rect(x, y, boxWidth, boxHeight);
  micLevel = mic.getLevel();

  
  // bezier(x1, y1, x2, y2, x3, y3, x4, y4);  
  let points = getPoints([x1, x2, x3, x4], [y1, y2, y3, y4]);
  // print(points);

  print(micLevel);

  if (init) {
    randomBezierCurve(x, y, boxWidth, boxHeight);
    init = false;
  }
  if (numRepetitions > 0) {
    if (dir == 1 && n < 100) n++;
    if (n == 100 || n == 0) {dir = -1 * dir; numRepetitions--}
    if (dir == -1 && n <= 100) n--;
  }
  else {
    numRepetitions = 2;
    randomBezierCurve(x, y, boxWidth, boxHeight);
  }

  fill(255, 0, 0);
  circle(points[n][0], points[n][1], 10);
  particles.forEach(particle => {
    particle.update(/* points[n][0] * (micLevel * scale), points[n][1] * (micLevel * scale) */);
    particle.draw();
  }) 
}
