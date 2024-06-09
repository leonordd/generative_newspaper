
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