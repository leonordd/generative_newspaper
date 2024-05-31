class TextBox {
    constructor(str, x, y, boxWidth, boxHeight, letterHeight) {
        this.x = x;
        this.y = y;
        this.str = str
        this.boxWidth = boxWidth
        this.boxHeight = boxHeight
        this.letterHeight = letterHeight
    }

    getWordParticles() {
        // char coordinates
        let xCoords = [];
        let yCoords = [];
        let words = split(str.trim(), ' ');
        let n = 0;
        let particles = [];

        for (let i = 0; i < str.length; i++) {

            let charWidth = textWidth(str.charAt(i));
            xCoords.push(this.x); 
            yCoords.push(this.y); 

            let particle = new Particle(str.charAt(i), this.x, this.y, letterSize);
            particles.push(particle);

            this.x += charWidth; 

            // new word
            if (str.charAt(i) == ' ') {
                if (this.x + textWidth(words[n + 1]) >= boxWidth) {
                    this.x = w/2 - boxWidth*.5;
                    this.y += letterHeight;
                }
                n++;
            }
        }

        return particles;
    }
}