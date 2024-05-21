/*grelha baseada no código https://openprocessing.org/sketch/2252812 */
let grid; // Declare object
let gridColor;
let old_english, times, roboto; 
let texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo mi non faucibus scelerisque. Etiam a nisl vestibulum, elementum ligula non, tristique metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Curabitur eget diam sit amet elit luctus suscipit sed eget justo. Integer mauris justo, pharetra non semper nec, aliquet in dolor. Ut cursus commodo neque eget maximus. Mauris sagittis lacus vel ante suscipit, a semper eros sodales. Maecenas malesuada sed metus a tempor. Proin sollicitudin diam ac pulvinar vulputate. Etiam ante risus, placerat a ipsum nec, ullamcorper cursus nunc. Nulla porta fermentum ex, rutrum tristique erat rhoncus eget. Mauris placerat sapien et neque tempor imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel blandit nibh, sed vehicula elit."

function setup() {
  createCanvas(1280, 720);
  grid = new Grid();
  gridColor=color(255,0,0);
  old_english = loadFont('assets/fonts/old_english/Monotype_Old_English_Text_W01.ttf');
  times = loadFont('assets/fonts/times/Times New Roman.ttf');
  roboto = loadFont('assets/fonts/roboto/Roboto-Regular.ttf');
}

function draw() {
  background('#fee7de');
  translate(0,0);
  grid.gridDisplay(gridColor);
  color(0);
  grid.textGrid("WA", "n3", "old", 0, 1, 0, -3);
  grid.textGrid("5 de maio de 2024", "n3", "old", 3, 5, 0, -3);
  grid.textGrid("nº4", "n3", "old", 7, 8, 0, -3);


  grid.textGrid("Wes Anderson Times", "n1", "old", 0, 8, 0, -3);
  grid.textGrid("Quem é Wes Anderson?","h1", "times", 0, 8, 4, -3);
  grid.textGrid("Conheça o cineasta que virou trend nas redes sociais","h2", "times", 2, 6, 6, -3);
  grid.textGrid(texto, "h3", "roboto", 0, 2, 6, -3);
  grid.textGrid(texto, "h3", "roboto", 2, 4, 8, -3);
  grid.textGrid(texto, "h3", "roboto", 4, 6, 8, -3);
  grid.textGrid(texto, "h3", "roboto", 6, 8, 6, -3);


  grid.lineGrid(0,8,3,3); //xxyy
  translate(0,-30);
  grid.lineGrid(0,8,1,1); //xxyy
}


class Grid { 
	constructor() {
		// Set fixed values for gridY and gutterX
		this.gridY = 10;
		this.gridX = 8;
		this.gutterX = 20;
		this.gutterY =20;
		this.pad = 20;
		this.pt=1;
	  }
	
	gridDisplay(color) {
	  stroke(color)
	  strokeWeight(0.5)
	  line(this.pad, this.pad, width - this.pad, this.pad)
	  line(this.pad, this.pad, this.pad, height - this.pad)
	  line(width - this.pad, height - this.pad, this.pad, height - this.pad)
	  line(width - this.pad, this.pad, width - this.pad, height - this.pad)
  
	  this.x = (width - this.pad * 2) / (this.gridX)
	  this.y = (height - this.pad * 2) / (this.gridY)
  
	  for (let i = 1; i < this.gridX; i++) {
		  line(this.x * i + this.pad - this.gutterX / 2, this.pad, this.x * i + this.pad - this.gutterX / 2, height - this.pad)
		  line(this.x * i + this.pad + this.gutterX / 2, this.pad, this.x * i + this.pad + this.gutterX / 2, height - this.pad)
	  }
  
	  for (let j = 1; j < this.gridY; j++) {
		  line(this.pad, this.y * j + this.pad - this.gutterY / 2, width - this.pad, this.y * j + this.pad - this.gutterY / 2)
		  line(this.pad, this.y * j + this.pad + this.gutterY / 2, width - this.pad, this.y * j + this.pad + this.gutterY / 2)
	  }
  }
  
  
	textGrid(content, size, font, fromx, tox, fromy, moveX=0, moveY=0, align=TOP) {
	//moveX=0, moveY=0, align=TOP
	  let fontSize
	  let offx, offy, x, y;
  
	  x = (width - this.pad * 2) / (this.gridX)
	  y = (height - this.pad * 2) / (this.gridY)
  
	  push()
	  if (size == 'n1') {
		textAlign(CENTER, align)
		  scale(1,1)
		  fontSize = 100 * this.pt
		  textLeading(fontSize*1.15);
		  translate(0,60);
	  } else if (size == 'n2') {
		textAlign(LEFT, align)
		translate(0, 100)
		scale(1.02, 1.02)
		fontSize = 16 * this.pt
		textLeading(fontSize*1.1);
	  } else if (size == 'n3') {
		textAlign(CENTER, align)
		//translate(-3, -3.5)
		//scale(1.02, 1.02)
		fontSize = 20 * this.pt
		//textLeading(fontSize*1.1);
	} else if(size == 'h1'){ //título
		content=content.toUpperCase();
		textAlign(CENTER, align);
		scale(1,1);
		fontSize = 90 * this.pt;
		textLeading(fontSize*1);
	} else if(size == 'h2'){ //subtítulo
		textAlign(CENTER, align)
		scale(1,1)
		fontSize = 48 * this.pt
		textLeading(fontSize*1);
	} else if(size == 'h3'){ //texto normal
		textAlign(LEFT, align)
		//translate(-3, -3.5)
		//scale(1.02, 1.02)
		fontSize = 16 * this.pt
		//textLeading(fontSize*1.1);
	}

	if(font == 'old'){
		textFont(old_english);
	}else if(font=='times'){
		textFont(times);
	}else if(font=='roboto'){
		textFont(roboto);
	}
	  textWrap(WORD)
	  stroke(255, 0, 0)
	  textSize(fontSize)
	  noStroke()
  
  // Now you can use these fixed values in your code
  if (fromx == 0) {
	  offx = this.pad + 3;
  } else {
	  offx = x * fromx + this.pad + this.gutterX / 2;
  }
  
  if (fromy == 0) {
	  offy = this.pad + 3;
  } else if (fromy == this.gridY) {
	  offy = height - this.pad + fontSize / 5;
	  translate(0, -8);
  } else {
	  offy = y * fromy + this.pad + this.gutterY / 2;
  }
  
  translate(moveX, moveY);
  text(content, offx - fontSize / 20, offy - fontSize / 5, (x) * (tox - fromx));
  //print(fontSize);
  pop();
  
  }

  lineGrid(fromx, tox, fromy, toy){
	push();
	let offx, offy, x, y;
  
	  x = (width - this.pad * 2) / (this.gridX)
	  y = (height - this.pad * 2) / (this.gridY)
	// Now you can use these fixed values in your code
	if (fromx == 0) {
		offx = this.pad;
	} else {
		offx = x * fromx + this.pad + this.gutterX / 2;
	}
	
	if (fromy == 0) {
		offy = this.pad;
	} else {
		offy = y * fromy + this.pad + this.gutterY / 2;
	}

	strokeWeight(2);
	stroke(0);
	//line(offx, offy, (x) * (tox - fromx), (y) * (toy - fromy));
	print(offx);
	print(offy);
	print(x);
	print(y);
	line(offx, offy - this.pad, (x) * (tox - fromx) + this.pad , y*fromy + this.gutterY/2);
	pop();
  }
} 







	// Set fixed values for gridY and gutterX
/*  var gridY = 6;
  var gridX = 8;
  var gutterX = 20;
  let pad = 10;

function gridDisplay(color) {
	stroke(color)
	strokeWeight(0.5)
	line(pad, pad, width - pad, pad)
	line(pad, pad, pad, height - pad)
	line(width - pad, height - pad, pad, height - pad)
	line(width - pad, pad, width - pad, height - pad)

	x = (width - pad * 2) / (gridX)
	y = (height - pad * 2) / (gridY)

	for (let i = 1; i < gridX; i++) {
		line(x * i + pad - gutterX / 2, pad, x * i + pad - gutterX / 2, height - pad)
		line(x * i + pad + gutterX / 2, pad, x * i + pad + gutterX / 2, height - pad)
	}

	for (let j = 1; j < gridY; j++) {
		line(pad, y * j + pad - gutterX / 2, width - pad, y * j + pad - gutterX / 2)
		line(pad, y * j + pad + gutterX / 2, width - pad, y * j + pad + gutterX / 2)
	}
}


let pt=1;

function textGrid(content, size, fromx, tox, fromy, moveX=0, moveY=0, align=TOP) {
  //moveX=0, moveY=0, align=TOP
	let fontSize
	let offx, offy, x, y;

  x = (width - pad * 2) / (gridX)
	y = (height - pad * 2) / (gridY)

	push()
	if (size == 'h1') {
		scale(1,1)
		fontSize = 67 * pt
		textLeading(fontSize*1.15);
	} else if (size == 'h2') {
		translate(-3, -3.5)
		scale(1.02, 1.02)
		fontSize = 16 * pt
		textLeading(fontSize*1.1);
	}

	textAlign(LEFT, align)
	textWrap(WORD)
	stroke(255, 0, 0)
	textSize(fontSize)
	noStroke()

// Now you can use these fixed values in your code
if (fromx == 0) {
    offx = pad + 3;
} else {
    offx = x * fromx + pad + gutterX / 2;
}

if (fromy == 0) {
    offy = pad + 3;
} else if (fromy == gridY) {
    offy = height - pad + fontSize / 5;
    translate(0, -8);
} else {
    offy = y * fromy + pad + gutterX / 2;
}

translate(moveX, moveY);
text(content, offx - fontSize / 20, offy - fontSize / 5, (x) * (tox - fromx));
print(fontSize);
pop();

}*/