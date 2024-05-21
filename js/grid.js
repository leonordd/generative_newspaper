class Grid { 
	constructor() {
		// Set fixed values for gridY and gutterX
		this.gridY = 28;
		this.gridX = 8;
		this.gutterX = 20;
		this.gutterY = 0;
		this.pad = 24;
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
		  //translate(0,60);
	  } else if (size == 'n2') {
		textAlign(LEFT, align)
		//translate(0, 100)
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
		translate(0, 0)
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
	  offx = this.pad;
  } else {
	  offx = x * fromx + this.pad + this.gutterX / 2;
  }
  
  if (fromy == 0) {
	  offy = this.pad;
  } else if (fromy == this.gridY) {
	  offy = height - this.pad + fontSize / 5;
	  /*translate(0, -8);*/
  } else {
	  offy = y * fromy + this.pad + this.gutterY / 2;
  }
  
  //translate(moveX, moveY);
  text(content, offx - fontSize /20, offy - fontSize / 5, (x) * (tox - fromx) - this.gutterX/2.5);
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