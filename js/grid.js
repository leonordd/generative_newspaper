class Grid { 
	constructor() {
		this.gridY = 2*28;
		this.gridX = 8;
		this.gutterX = 20;
		this.gutterY = 0;
		this.pad = 32;
		this.pt=1;

		this.info = [];
		this.isBodyText = false;
	  }
	
	gridDisplay(color) {
	  stroke(color)
	  fill(color)
	  strokeWeight(0.5)
	  line(this.pad, this.pad, width - this.pad, this.pad)
	  line(this.pad, this.pad, this.pad, 2*height - this.pad)
	  line(width - this.pad, 2*height - this.pad, this.pad, 2*height - this.pad)
	  line(width - this.pad, this.pad, width - this.pad, 2*height - this.pad)
  
	  this.x = (width - this.pad * 2) / (this.gridX)
	  this.y = (2*height - this.pad * 2) / (this.gridY)
  
	  for (let i = 1; i < this.gridX; i++) {
		  line(this.x * i + this.pad - this.gutterX / 2, this.pad, this.x * i + this.pad - this.gutterX / 2, 2*height - this.pad)
		  line(this.x * i + this.pad + this.gutterX / 2, this.pad, this.x * i + this.pad + this.gutterX / 2, 2*height - this.pad)
		  textSize(10);
		  text(i, this.x * i + this.pad + this.gutterX / 2, this.pad)
	  }
  
	  for (let j = 1; j < this.gridY; j++) {
		  line(this.pad, this.y * j + this.pad - this.gutterY / 2, width - this.pad, this.y * j + this.pad - this.gutterY / 2)
		  line(this.pad, this.y * j + this.pad + this.gutterY / 2, width - this.pad, this.y * j + this.pad + this.gutterY / 2)
		  //textAlign(RIGHT, align);
		  textSize(10);
		  text(j, 0, this.y * j)
	  }
  }


  textHeight(content, size, cols) {
	let fontSize;
	if (size == 'n1') {
		fontSize = 100 * this.pt;
	} else if (size == 'n2') {
		fontSize = 16 * this.pt;
	} else if (size == 'n3') {
		fontSize = 20 * this.pt;
	} else if (size == 'h1') {
		fontSize = 90 * this.pt;
	} else if (size == 'h2') {
		fontSize = 48 * this.pt;
	} else if (size == 'h3') {
		fontSize = 16 * this.pt;
	}

	textSize(fontSize);

	let lineHeight = textAscent() + textDescent();
    let lineWidth = (width - this.pad * 2) / this.gridX * cols - this.gutterX / 2.5;
    let words = content.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let testLine = currentLine + ' ' + word;
        if (textWidth(testLine) > lineWidth) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine);

	let textHeight = lines.length * lineHeight;

    let lastLineIndex = ceil(textHeight / this.y);
    return lastLineIndex;

	}

	  
	titleGrid(content, size, font, fromx, tox, fromy, moveX=0, moveY=0, align=TOP) {
	
		//moveX=0, moveY=0, align=TOP
		  let fontSize
		  let offx, offy, x, y;
	  
		  x = (width - this.pad * 2) / (this.gridX)
		  y = (2*height - this.pad * 2) / (this.gridY)
	  
		  fill(0);
		  push()
		  if (size == 'n1') {
			textAlign(CENTER, align)
			 translate(0,15);
			  scale(1,1)
			  fontSize = 105 * this.pt
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
			fontSize = 80 * this.pt;
			textLeading(fontSize*1);
		} else if(size == 'h2'){ //subtítulo
			textAlign(CENTER, align)
			scale(1,1)
			fontSize = 38 * this.pt
			translate(-20,0)
			textLeading(fontSize*1);
		} 
	
		
		textFont(font);
		  textWrap(WORD)
		  textSize(fontSize)
		  noStroke()
	
	
	  if (fromx == 0) {
		  offx = this.pad;
	  } else {
		  offx = x * fromx + this.pad + this.gutterX / 2;
	  }
	
	  fromy=fromy*2;
	
	  if (fromy == 0) {
		  offy = this.pad;
	  } else if (fromy == this.gridY) {
		  offy = height - this.pad + fontSize / 5;
		  /*translate(0, -8);*/
	  } else {
		  offy = y * fromy + this.pad + this.gutterY / 2;
	  }
	text(content, offx - fontSize /20, (offy - fontSize / 5)/2 + moveY, (x) * (tox - fromx) - this.gutterX/2.5);
	
	  pop();
	  
	  }
  
	textGrid(content, size, font, fromx, tox, fromy, moveX=0, moveY=0, align=TOP) {
	
	//moveX=0, moveY=0, align=TOP
	  let fontSize
	  let offx, offy, x, y;
  
	  x = (width - this.pad * 2) / (this.gridX)
	  y = (2*height - this.pad * 2) / (this.gridY)
  
	  fill(0);
	  push()

	  if(size=='h3'){
		textAlign(LEFT, align)
		//translate(0, 0)
		//scale(1.02, 1.02)
		fontSize = 16 * this.pt
	  }

	/*if(font=='roboto'){
		textFont(roboto);
	}else if(font =='garamond'){
		textFont(eb_garamond);
	}*/
	textFont(font);
	  textWrap(WORD)
	  textSize(fontSize)
	  noStroke()

  
  if (fromx == 0) {
	  offx = this.pad;
  } else {
	  offx = x * fromx + this.pad + this.gutterX / 2;
  }

  fromy=fromy*2;

  if (fromy == 0) {
	  offy = this.pad;
  } else if (fromy == this.gridY) {
	  offy = height - this.pad + fontSize / 5;
	  /*translate(0, -8);*/
  } else {
	  offy = y * fromy + this.pad + this.gutterY / 2;
  }
  
  //let text = new TextBox(content, offx - fontSize /20, (offy - fontSize / 5)/2 + moveY, (x) * (tox - fromx) - this.//gutterX/2.5, 500, 20, 16);

  //particles = text.getWordParticles();
  //console.log(particles);
	let dict = {}
	dict["text"] = content;
	dict["x"] = offx - fontSize /20;
	dict["y"] = (offy - fontSize / 5)/2 + moveY;
	dict["width"] = (x) * (tox - fromx) - this.gutterX/2.5;
	dict["height"] = 300;
	
	this.info.push(dict);
  pop();
  }

  lineGrid(fromx, tox, fromy, toy){
	push();
	let offx, offy, x, y;
  
	  x = (width - this.pad * 2) / (this.gridX)
	  y = (height*2 - this.pad * 2) / (this.gridY)
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
	print(offx);
	print(offy);
	print(x);
	print(y);
	line(offx, offy - this.pad, (x) * (tox - fromx) + this.pad , y*fromy + this.gutterY/2);
	pop();
  }

getVisibleText(content, size, maxHeight, cols) {
	let fontSize;

	if (size == 'n1') {
		fontSize = 100 * this.pt;
	} else if (size == 'n2') {
		fontSize = 16 * this.pt;
	} else if (size == 'n3') {
		fontSize = 20 * this.pt;
	} else if (size == 'h1') {
		fontSize = 90 * this.pt;
	} else if (size == 'h2') {
		fontSize = 48 * this.pt;
	} else if (size == 'h3') {
		fontSize = 16 * this.pt;
	}

	textSize(fontSize);
	let lineHeight = textAscent() + textDescent();
	let lineWidth = (width - this.pad * 2) / this.gridX * cols - this.gutterX / 2.5;
	let words = content.split(' ');
	let lines = [];
	let currentLine = words[0];

	for (let i = 1; i < words.length; i++) {
		let word = words[i];
		let testLine = currentLine + ' ' + word;
		if (textWidth(testLine) > lineWidth) {
			lines.push(currentLine);
			currentLine = word;
		} else {
			currentLine = testLine;
		}

		if (lines.length * lineHeight > maxHeight) {
			break;
		}
	}

	// Push the last line
	if (currentLine) {
		lines.push(currentLine);
	}

	console.log("LINES " + lines.join(' '));
	return lines.join(' ');
}

renderTextInColumns(content, size, font, fromx, startY, columnHeight, sY0, cH0) {
	this.info = [];
	this.isBodyText = true;
	let currentX = fromx;
	let currentY = startY;
	let formattedString = content.replace(/<p>/g, '$').replace(/<\/p>/g, '$');
	let remainingText = formattedString;
	let cols = 2; // Cada texto ocupa 2 colunas
	let totalColumns = floor((this.gridX - fromx) / cols);

	for (let i = 0; i < totalColumns; i++) {
		if (remainingText.length <= 0) {
			break;
		}

		let visibleText = this.getVisibleText(remainingText, size, columnHeight, cols);
		this.textGrid(visibleText, size, font, currentX, currentX + cols, currentY);

		// Update remainingText using words processed to avoid issues with special characters
		let visibleWords = visibleText.split(' ');
		remainingText = remainingText.split(' ').slice(visibleWords.length).join(' ');

		currentX = currentX + cols;
		if (currentX >= this.gridX) {
			break;
		}

		if (i == 0) {
			currentY = startY + sY0; // Ajusta a posição Y para a próxima 2
			columnHeight = cH0;
		} else if (i == 1) {
			currentY = startY + sY0; // Ajusta a posição Y para a próxima 3
			columnHeight = cH0;
		} else if (i == 2) {
			currentY = startY; // Ajusta a posição Y para a próxima 4
			columnHeight = columnHeight;
		}

		if (currentY >= this.gridY) {
			currentY = 0;
		}
	}
	this.isBodyText = false;
}
	
} 


  