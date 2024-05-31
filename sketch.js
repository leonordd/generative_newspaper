let font;

let w, h;
w = 400;
h = 400;

let boxWidth = 300;
let boxHeight = 300;
let letterSize = 16;
let letterHeight = letterSize + 4;
let particles;

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';


function preload() {
  font = loadFont("fonts/HelveticaNowDisplay-Light.ttf");
}

function setup() {
  
  createCanvas(w, h);
  textSize(letterSize);
  textFont(font);

  let x = w/2 - boxWidth*.5;
  let y = h/2 - boxHeight*.5;

  let text = new TextBox(str, x, y, boxWidth, boxHeight, letterHeight);
  particles = text.getWordParticles();
}

function draw() {
  background(0);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  })
}
