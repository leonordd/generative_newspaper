let font;

let w, h;
w = 1280 / 2;
h = 720 / 2;

let boxWidth = 500;
let boxHeight = 200;
let letterSize = 16;
let letterHeight = letterSize + 4;
let particles;

// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
let str = "Wesley Wales Anderson (Houston, 1 de maio de 1969) é um cineasta americano, produtor, roteirista e ator. Seus filmes são conhecidos pelos seus visuais excêntricos e pelo estilo de narrativa. \n Anderson foi indicado pelo Oscar na categoria de Melhor Roteiro Original em The Royal Tenenbaums em 2001, Moonrise Kingdom em 2012 e em O Grande Hotel Budapeste em 2014, e também na categoria de Melhor Animação em The Fantastic Mr.Fox em 2009. Recebeu sua primeira indicação como Melhor Diretor e ganhou o Globo de Ouro de Melhor Filme - Comédia ou Musical pelo filme The Grande Budapest Hotel em 2014. Recebeu também o Prêmio BAFTA de Melhor Roteiro Original em 2015.";

let bezierPoints = [];


let x1;
let x2;
let x3;
let x4;
let y1;
let y2;
let y3;
let y4;

function preload() {
  font = loadFont("fonts/HelveticaNowDisplay-Light.ttf");
}

function setup() {
  
  createCanvas(w, h);

  x1 = w * random(0.05, 0.3);
  x2 = w * random(0.2, 0.6);
  x3 = w * 0.7;
  x4 = w * random(0.7, 0.9);

  y1 = h * 0.3;
  y2 = h * random(0, 1.5);
  y3 = -y2;
  y4 = h * 0.9;

  // background(222);
  

  mic = new p5.AudioIn();
  mic.start();

  textSize(letterSize);
  textFont(font);

  let x = w/2 - boxWidth*.5;
  let y = h/2 - boxHeight*.5;

  let text = new TextBox(str, x, y, boxWidth, boxHeight, letterHeight);
  particles = text.getWordParticles();

  for (let i = 0; i < 150; i+=1/150) {
    // print(i)
    x = bezierPoint(x1, x2, x3, x4, i);
    y = bezierPoint(y1, y2, y3, y4, i);
    bezierPoints.push([x, y]);
  }

  // print(bezierPoints.length)
  // print(bezierPoints);
}

let n = 0;
let dir = 1;
let numRepetitions = 4;
let scale = 10;

function draw() {
  background(0);
  micLevel = mic.getLevel();

  /* noFill();
  stroke(255, 0, 0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4); */

  // print(bezierPoints[n]);
  /* print(n);
  print(dir); */

  print(micLevel);

  if (numRepetitions > 0) {
    if (dir == 1 && n < 150) n++;
    if (n == 150 || n == 0) {dir = -1 * dir; numRepetitions--}
    if (dir == -1 && n <= 150) n--;
  }
  else {
    numRepetitions = 4;
    x1 = w * random(0.05, 0.3);
    x2 = w * random(0.2, 0.6);
    x3 = w * 0.7;
    x4 = w * random(0.7, 0.9);

    y1 = h * 0.3;
    y2 = h * random(0, 1.5);
    y3 = -y2;
    y4 = h * 0.9;
  }

  particles.forEach(particle => {
    particle.update(bezierPoints[n][0] * (micLevel * 2), bezierPoints[n][1] * (micLevel * 2));
    particle.draw();
  }) 
}
