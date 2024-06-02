class Particle {
  constructor(letter, x, y, size) {
    this.letter = letter;
    this.x = x;
    this.y = y;

    this.ax = 0;
    this.ay = 0;

    this.vx = 0;
    this.vy = 0;

    this.ix = x;
    this.iy = y;

    this.size = size;
    this.minDist = 100;
    this.push = 0.02;
    this.pull = 0.004;
    this.smooth = 0.95;
    this.currDist;
    this.diff;

  }

  update(curveX, curveY) {

    let dx, dy, distDelta;
    
    this.diff = this.ix - this.x;
    dx = this.ix - this.x;
    dy = this.iy - this.y;

    this.ax = dx * this.pull;
    this.ay = dy * this.pull;

    dx = this.x - curveX;
    dy = this.y - curveY;

    this.currDist = Math.sqrt(dx*dx + dy*dy);
    distDelta = this.minDist - this.currDist;

    if (this.currDist < this.minDist) {

      this.ax += (dx / this.currDist) * distDelta * this.push;
      this.ay += (dy / this.currDist) * distDelta * this.push;
    }

    this.vx += this.ax;
    this.vy += this.ay;

    this.vx *= this.smooth;
    this.vy *= this.smooth;

    this.x += this.vx;
    this.y += this.vy;

  }

  draw() {
    fill(255, 255, 255, this.currDist);
    if (this.diff > 30) this.size = 30;
    else this.size = letterSize;

    textSize(this.size);
    text(this.letter, this.x, this.y);
  }
}