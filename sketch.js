/*grelha baseada no código https://openprocessing.org/sketch/2252812 */

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(220);
  gridDisplay(color(255,0,0));
  color(0);
  textGrid("Wes Anderson", "h1", 0, 2, 0, -3);
}

	// Set fixed values for gridY and gutter
  var gridY = 6;
  var gridX = 8;
  var gutter = 20;
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
		line(x * i + pad - gutter / 2, pad, x * i + pad - gutter / 2, height - pad)
		line(x * i + pad + gutter / 2, pad, x * i + pad + gutter / 2, height - pad)
	}

	for (let j = 1; j < gridY; j++) {
		line(pad, y * j + pad - gutter / 2, width - pad, y * j + pad - gutter / 2)
		line(pad, y * j + pad + gutter / 2, width - pad, y * j + pad + gutter / 2)
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
    offx = x * fromx + pad + gutter / 2;
}

if (fromy == 0) {
    offy = pad + 3;
} else if (fromy == gridY) {
    offy = height - pad + fontSize / 5;
    translate(0, -8);
} else {
    offy = y * fromy + pad + gutter / 2;
}

translate(moveX, moveY);
text(content, offx - fontSize / 20, offy - fontSize / 5, (x) * (tox - fromx));
print(fontSize);
pop();

}