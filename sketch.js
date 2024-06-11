/*grelha baseada no código https://openprocessing.org/sketch/2252812 */
let grid; // Declare object
let gridColor;
let old_english, times, roboto, eb_garamond, alice, bremlin, jost, lato, montserrat, montserrat2, montserrat3, open_sans, oswald, outfit, outfit2, outfit3, pirata_one, playfair_display, space_grotesk,suisse, times_now, verdana; 

let alturaTexto;
////////////////
var hs1, hs2;
//let paragraphs = [];
let spacing=0;

//import fetchApi from "./js/components/fetch.js";
const news_api = 'https://api.cosmicjs.com/v3/buckets/dg-project-production/objects?pretty=true&query=%7B%22type%22:%22news%22%7D&limit=10&read_key=U9g6uup9S8xDoSCPis9MuJuIoiWdhErYhdK04nWsXKbaZkVWIY&depth=1&props=slug,title,metadata,id,';

//let text;
let w = 1280;
let h = 720;
let boxWidth = 100;
let boxHeight = h*2;
let x = w/2 - boxWidth*0.5;
let y = h/2 - boxHeight*0.5;
let letterSize = 16
let letterHeight/*  = letterSize + 4 */;
let particles, particles2,  particles3,  particles4;
//let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

let aux = true;
//let text ;
let index, index2; 
let fonts = []; 
let fonts2 = []; 
let randomBezier, randomBezier2, randomBezier3, randomBezier4;
//let s=100; //define a escala -- jazz
let s=200;
let n=0;
let dir=1;
let points, points2, points3, points4;
let mic;
let micStart=false;
// @leonor tive de reajustar aqui a margem
let marg = 52;
let date = new Date();
let dat;
let day_otw;

//COSMIC
let new_title = "";
let new_content = "";
let inc;
let xx, yy,ww,hh;

let num_newspaper = 1;

//function to get data from database
const getData = async _ => {
  const response = await fetch(news_api);
  let dados = await response.json();

  inc = round(random(0,dados.objects.length-1));
  console.log("inc"+inc);
  console.log(dados.objects.length-1);
  news_title = dados.objects[inc].metadata.news_title;
  news_content = dados.objects[inc].metadata.news_content;

  /*for(let i=0; i<dados.objects.length; i++){
    news_title = dados.objects[i].metadata.news_title;
    news_content = dados.objects[i].metadata.news_content;
  }*/
}

function preload() { 
  old_english = loadFont('assets/fonts/old_english/Monotype_Old_English_Text_W01.ttf');
  times = loadFont('assets/fonts/times/Times New Roman.ttf');
  roboto = loadFont('assets/fonts/roboto/Roboto-Regular.ttf');
  eb_garamond = loadFont('assets/fonts/EB_Garamond/EBGaramond-Regular.ttf');
  alice = loadFont('assets/fonts/Alice/Alice-Regular.ttf');
  jost= loadFont('assets/fonts/jost/Jost-Regular.ttf');
  lato = loadFont('assets/fonts/Lato/Lato-Regular.ttf');
  montserrat = loadFont('assets/fonts/montserrat/Montserrat-Regular.ttf');
  montserrat2 = loadFont('assets/fonts/montserrat/Montserrat-Semibold.ttf');
  montserrat3 = loadFont('assets/fonts/montserrat/Montserrat-Bold.ttf');
  open_sans = loadFont('assets/fonts/Open_Sans/OpenSans-Regular.ttf');
  oswald = loadFont('assets/fonts/Oswald/Oswald-Regular.ttf');
  outfit = loadFont('assets/fonts/outfit/Outfit-Regular.ttf');
  outfit2 = loadFont('assets/fonts/outfit/Outfit-Bold.ttf');
  outfit3 = loadFont('assets/fonts/outfit/Outfit-Black.ttf');
  pirata_one = loadFont('assets/fonts/pirata_one/PirataOne-Regular.ttf');
  playfair_display = loadFont('assets/fonts/playfair_display/PlayfairDisplay-Regular.ttf');
  space_grotesk = loadFont('assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf')
  times_now = loadFont('assets/fonts/times_now/TimesNow-Semibold.ttf');
  verdana = loadFont('assets/fonts/verdana/Verdana.ttf');
  
  fonts = [times, roboto, eb_garamond, alice, jost, lato, montserrat, open_sans, oswald, outfit, pirata_one, playfair_display, space_grotesk,times_now, verdana];
  index = round(random(0, fonts.length-1));
  index2 = round(random(0, fonts.length-1));
} 

function setup() {
  createCanvas(1280, 720);
  //mic.start();
  getData();
  
  textSize(letterSize);
  letterHeight = textAscent() + textDescent();
  grid = new Grid();
  gridColor=color(255,0,0);

  //let text = new TextBox(str, x, y, boxWidth, boxHeight, letterHeight, letterSize);
  //particles = text.getWordParticles();
  //fonts = [old_english, times, roboto];
  
  hs2 = new WScrollbar(width-16, 0, 16, height, 16);
  randomBezier = new RandomBezier();
  randomBezier2 = new RandomBezier();
  randomBezier3 = new RandomBezier();
  randomBezier4 = new RandomBezier();

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate()
  let day_of_the_week = date.getDay();

  let month_t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  dat = month_t[month] + " " + day + ", " + year;

  let day_otw_t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day_otw = day_otw_t[day_of_the_week];

  //botão inicial
  xx = w/2;
  yy = h/2+100;
  ww = 200;
  hh = 80;
}

function keyPressed() {
  if (key === ' ') {
  if (getAudioContext().state !== 'running') {
      getAudioContext().resume().then(() => {
          console.log('Audio context resumed');
          // Adicione aqui o seu código de som
          mic = new p5.AudioIn()
          mic.start();
          micStart = true;
      });
  }
}

if(key==='A' || key ==='a'){
  index = round(random(0, fonts.length-1));
  index2 = round(random(0, fonts.length-1));
  console.log("fonts" + fonts.length);
console.log("index"+index);
console.log("index2"+index2)
  num_newspaper++;
  if(num_newspaper>10){
    num_newspaper=1;
  }
}
}

function mousePressed(){
  if((mouseX>(xx-ww)) && (mouseX<(xx+ww)) && (mouseY>(yy-hh)) && (mouseY<(yy+hh))){
    //cursor(HAND);
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume().then(() => {
          console.log('Audio context resumed');
          // Adicione aqui o seu código de som
          mic = new p5.AudioIn()
          mic.start();
          micStart = true;
      });
  }
  }
}

function draw() {
  background('#F3E4EC');
  //background('#fee7de');
  //@xanaaaa descomenta isto
  /* if(frameCount === 1 ){
    capturer.start();
  } */
  rectMode(CORNER);
  if(micStart){
    micLevel = mic.getLevel();
    console.log("mic: " + micLevel)

    translate(0,0);
    fill(255, 0, 0);

    hs2.update();
    hs2.display();
    fill(0);
    
    rect(100,-img2Pos,100,height/2);
    
    var img2Pos = hs2.getPos();
    push();
    translate(0,-img2Pos);

    //grid.gridDisplay(gridColor);

    if (dir == 1 && n < 100) n++;
    if (n == 100 || n == 0) {dir = -1 * dir;}
    if (dir == -1 && n <= 100) n--;

    //renderTextInColumns(content, size, font, fromx, startY, columnHeight, startLines, columnHeights);
    draw_Newspaper();
    aux=false;
    pop();
  } else{ //mic ainda não começou 
    draw_Initial();
  }
  //@xanaaaa descomenta isto
/*   if (frameCount < 60 * 5){
    capturer.capture(canvas);
  }
  else if (frameCount === 60 * 5){
    capturer.save();
    capturer.stop();
  } */

}

function draw_Newspaper(){
  //let randomBezier;
  if(aux){
    cursor(ARROW);
    grid.renderTextInColumns(news_content, 'h3', eb_garamond, 0, 19, 550, 6.7, 455);

    //for(let i=0; i<grid.info.lenght())
    //console.log("w: "+grid.info[0]["w"])
    console.log(grid.info[0]);
    console.log("lenght:" + grid.info.length)

    console.log(grid.info);

    //randomBezier = new RandomBezier(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight);
    randomBezier.randomBezierCurve(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"]-marg, boxHeight)
    randomBezier2.randomBezierCurve(grid.info[1]["x"],grid.info[1]["y"], grid.info[1]["width"]-marg, boxHeight)
    randomBezier3.randomBezierCurve(grid.info[2]["x"],grid.info[2]["y"], grid.info[2]["width"]-marg, boxHeight)
    randomBezier4.randomBezierCurve(grid.info[3]["x"],grid.info[3]["y"], grid.info[3]["width"]-marg, boxHeight)

    let text = new TextBox(grid.info[0]["text"], grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"]-marg, boxHeight, letterHeight, letterSize);
    let text2 = new TextBox(grid.info[1]["text"], grid.info[1]["x"],grid.info[1]["y"], grid.info[1]["width"]-marg, boxHeight, letterHeight, letterSize);
    let text3 = new TextBox(grid.info[2]["text"], grid.info[2]["x"],grid.info[2]["y"], grid.info[2]["width"]-marg, boxHeight, letterHeight, letterSize);
    let text4 = new TextBox(grid.info[3]["text"], grid.info[3]["x"],grid.info[3]["y"], grid.info[3]["width"]-marg, boxHeight, letterHeight, letterSize);
    //console.log(grid.info[0]["text"]+ grid.info[1]["text"] + grid.info[2]["text"] + grid.info[3]["text"]);
    //let text = new TextBox(str, grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight, letterHeight, letterSize);
    particles = text.getWordParticles();
    particles2 = text2.getWordParticles();
    particles3 = text3.getWordParticles();
    particles4 = text4.getWordParticles();

    //console.log(randomBezier);
    let dic = randomBezier.randomBezierCurve(grid.info[0]["x"],grid.info[0]["y"], grid.info[0]["width"], boxHeight)
    let dic2 = randomBezier2.randomBezierCurve(grid.info[1]["x"],grid.info[1]["y"], grid.info[1]["width"], boxHeight)
    let dic3 = randomBezier3.randomBezierCurve(grid.info[2]["x"],grid.info[2]["y"], grid.info[2]["width"], boxHeight)
    let dic4 = randomBezier4.randomBezierCurve(grid.info[3]["x"],grid.info[3]["y"], grid.info[3]["width"], boxHeight)
    //console.log(dic);

    points = randomBezier.getPoints([dic["x1"], dic["x2"], dic["x3"], dic["x4"]], [dic["y1"], dic["y2"], dic["y3"], dic["y4"]]);
    points2 = randomBezier2.getPoints([dic2["x1"], dic2["x2"], dic2["x3"], dic2["x4"]], [dic2["y1"], dic2["y2"], dic2["y3"], dic2["y4"]]);
    points3 = randomBezier3.getPoints([dic3["x1"], dic3["x2"], dic3["x3"], dic3["x4"]], [dic3["y1"], dic3["y2"], dic3["y3"], dic3["y4"]]);
    points4 = randomBezier4.getPoints([dic4["x1"], dic4["x2"], dic4["x3"], dic4["x4"]], [dic4["y1"], dic4["y2"], dic4["y3"], dic4["y4"]]);
    //console.log(points);
}
    particles.forEach(particle => {
    particle.update(points[n][0] * (micLevel * s), points[n][1] * (micLevel * s));
    particle.draw();
    })

    particles2.forEach(particle => {
    particle.update(points2[n][0] * (micLevel * s), points2[n][1] * (micLevel * s));
    particle.draw();
    })
    particles3.forEach(particle => {
    particle.update(points3[n][0] * (micLevel * s), points3[n][1] * (micLevel * s));
    particle.draw();
    })
    particles4.forEach(particle => {
    particle.update(points4[n][0] * (micLevel * s), points4[n][1] * (micLevel * s));
    particle.draw();
    })

    color(0);
    //grid.textGrid("texto", "nível texto", "fonte",fromx, tox, fromy, -3);
    grid.titleGrid(day_otw, "n3", fonts[index], 0, 1, 1, -3);
    grid.titleGrid(dat, "n3", fonts[index], 3, 5, 1, -3);
    grid.titleGrid("No. " + num_newspaper + "", "n3", fonts[index], 7, 8, 1, -3);
    grid.titleGrid("Wes Anderson Times", "n1", old_english, 0, 8, 5, -3);
    grid.titleGrid("Who is Wes Anderson?","h1", fonts[index2], 0, 8, 13, -3);
    grid.titleGrid(news_title,"h2", fonts[index2], 2, 6, 19, -3);

    grid.lineGrid(0,8,4,4); //xxyy y+1
    grid.lineGrid(0,8,12,12); //xxyy

    aux=false;
    //pop();
}

function draw_Initial(){
  grid.titleGrid("Wes Anderson Times", "n1", old_english, 0, 8, 5, -3);
  grid.lineGrid(0,8,4,4); //xxyy y+1
  grid.lineGrid(0,8,24,24); //xxyy
  if((mouseX>(xx-ww)) && (mouseX<(xx+ww)) && (mouseY>(yy-hh)) && (mouseY<(yy+hh))){
    fill('#E8C8D9');
    //print("sim");
    cursor(HAND);
  } else{
    fill('#642E68');
    cursor(ARROW);
  }
  noStroke();
  rectMode(CENTER);
  rect(xx, yy, ww, hh, 10);

  if((mouseX>(xx-ww)) && (mouseX<(xx+ww)) && (mouseY>(yy-hh)) && (mouseY<(yy+hh))){
    fill('#642E68');
    stroke('#642E68');
  }else{
    fill('#F3E4EC');
    stroke('#F3E4EC');
  }
  textSize(22);
  //textAlign(CENTER);
  text("COMEÇAR", xx-60, yy+10);
}