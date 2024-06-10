class TextBox {
    constructor(str, x, y, boxWidth, boxHeight, letterHeight, letterSize) {
        this.x = x;
        this.y = y;
        this.str = str;
        this.boxWidth = boxWidth;
        this.boxHeight = boxHeight;
        this.letterHeight = letterHeight;
        this.letterSize = letterSize;
    }

    getWordParticles() {
        // char coordinates
        let xCoords = [];
        let yCoords = [];
        let words = split(str.trim(), ' ');
        let n = 0;
        let particles = [];
        let x0 = this.x;
        let y0 = this.y;

        for (let i = 0; i < str.length; i++) {

            let charWidth = textWidth(str.charAt(i));
            xCoords.push(this.x); 
            yCoords.push(this.y); 

            let particle = new Particle(str.charAt(i), this.x, this.y, this.letterSize);
            particles.push(particle);

            this.x += charWidth; 

            // new word
            if (str.charAt(i) == ' ') {
                if (this.x + textWidth(words[n + 1]) >= x0 + this.boxWidth) {
                    print(textWidth(words[n + 1]));
                    print("****");
                    this.x = w/2 - this.boxWidth*.5;
                    this.y += this.letterHeight;
                }
                n++;
            }
        }

        return particles;
    }
}