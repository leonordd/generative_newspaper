/*grelha baseada no código https://openprocessing.org/sketch/2252812 */
let grid; // Declare object
let gridColor;
let old_english, times, roboto; 
let texto= "Wes Anderson’s style is one of the most distinctive in contemporary cinema. So much so that viewers can recognise his work from a single image, whether it’s animation or live-action. While vintage flair, bold colour scheme and keen costume design are obvious components of this unique aesthetic, there are numerous subtle ways he creates his distinctive look. And it’s not all visual. The style of this singular auteur also evinces a particular warmth, as well as a sense of escapism and adventure, akin to reading by torchlight under the duvet covers at night. With his new release Asteroid City in cinemas in June, we’ll be treated anew to Wes Anderson’s brand of cinema. To honour the occasion, let’s take a look at how he achieves this unique story-book aesthetic."

////////////////
var hs1, hs2;


function setup() {
  createCanvas(1280, 720);
  grid = new Grid();
  gridColor=color(255,0,0);
  old_english = loadFont('assets/fonts/old_english/Monotype_Old_English_Text_W01.ttf');
  times = loadFont('assets/fonts/times/Times New Roman.ttf');
  roboto = loadFont('assets/fonts/roboto/Roboto-Regular.ttf');


  ////
  hs2 = new WScrollbar(width-16, 0, 16, height, 16);
}

function draw() {
  background('#fee7de');

  translate(0,0);
  fill(255, 0, 0);
  //rect(-img1Pos, 100, width/2, height);

  //hs1.update();
  //hs1.display();
  
  hs2.update();
  hs2.display();
  fill(0);
  
  //rect(-img1Pos-width/2,0,100,100);
  rect(100,-img2Pos,100,height/2);
  //grid.gridDisplay(gridColor);
  var img2Pos = hs2.getPos();
  translate(0,-img2Pos);

  color(0);
  grid.textGrid("WA", "n3", "old", 0, 1, 0, -3);
  grid.textGrid("5 de maio de 2024", "n3", "old", 3, 5, 0, -3);
  grid.textGrid("nº4", "n3", "old", 7, 8, 0, -3);
  grid.textGrid("Wes Anderson Times", "n1", "old", 0, 8, 3, -3);


  grid.textGrid("Quem é Wes Anderson?","h1", "times", 0, 8, 10, -3);
  grid.textGrid("Conheça o cineasta que virou trend nas redes sociais","h2", "times", 2, 6, 14, -3);
  grid.textGrid(texto, "h3", "roboto", 0, 2, 14, -3);
  grid.textGrid(texto, "h3", "roboto", 2, 4, 19, -3);
  grid.textGrid(texto, "h3", "roboto", 4, 6, 19, -3);
  grid.textGrid(texto, "h3", "roboto", 6, 8, 14, -3);


  grid.lineGrid(0,8,9,9); //xxyy
  //translate(0,-30);
  grid.lineGrid(0,8,2,2); //xxyy
}


function mouseWheel(event) {
	hs2.scroll(event.delta);
  }


  function WScrollbar(xp, yp, sw, sh, l) {
	this.swidth = sw; // width of the bar
	this.sheight = sh; // height of the slider
	var heighttowidth = sh - sw;
	this.ratio = sh / heighttowidth;
	this.xpos = xp - this.swidth / 2; // x position of the bar
	this.ypos = yp; // y position of the bar
	this.spos = this.ypos + 16/2 - this.swidth / 2; // initial slider position
	this.newspos = this.spos;
	this.sposMin = this.ypos; // min value of slider position
	this.sposMax = this.ypos + sh - sw; // max value of slider position
	this.loose = l; // how loose/heavy
	this.over = false; // is the mouse over the slider?
	this.locked = false;
  
	this.update = function() {
	  if (this.overEvent()) {
		this.over = true;
	  } else {
		this.over = false;
	  }
	  if (mouseIsPressed && this.over) {
		this.locked = true;
	  }
	  if (!mouseIsPressed) {
		this.locked = false;
	  }
	  if (this.locked) {
		this.newspos = constrain(mouseY - this.swidth / 2, this.sposMin, this.sposMax);
	  }
	  if (abs(this.newspos - this.spos) > 1) {
		this.spos = this.spos + (this.newspos - this.spos) / this.loose;
	  }
	}
  
	this.constrain = function(val, minv, maxv) {
	  return min(max(val, minv), maxv);
	}
  
	this.overEvent = function() {
	  if (mouseY > this.spos && mouseY < this.spos + this.swidth &&
		mouseX > this.xpos && mouseX < this.xpos + this.sheight) {
		return true;
	  } else {
		return false;
	  }
	}
  
	
	
	this.display = function() {
	  noStroke();
	  fill(204);
	  rect(this.xpos, this.ypos, this.swidth, this.sheight);
	  if (this.over || this.locked) {
		fill(0, 0, 0);
	  } else {
		fill(102, 102, 102);
	  }
	 
	 rect(this.xpos, this.spos, this.swidth, this.swidth, 30);
	}
  
	this.getPos = function() {
	  // Convert spos to be values between
	  // 0 and the total height of the scrollbar
	  return (this.spos - this.ypos) * this.ratio;
	}
	
	this.scroll = function(delta) {
	  this.newspos = constrain(this.newspos + delta, this.sposMin, this.sposMax);
	}
  
  }

