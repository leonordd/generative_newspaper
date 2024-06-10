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


    updatePosition(x, y, width, height){
        this.x = x;
        this.y = y; 
        this.boxWidth = width;
        this.boxHeight = height; 
    }

      
    getWordParticles() {
        // char coordinates
        let xCoords = [];
        let yCoords = [];
        let words = split(this.str.trim(), ' ');
        let n = 0;
        let particles = [];
        let x0 = this.x;
        let y0 = this.y;
        this.str = this.str.trim();
        for (let i = 0; i < this.str.length; i++) {
            //console.log(this.str.charAt(i));
            if(this.str.charAt(i) == '$'){
                this.x = x0;
                this.y += this.letterHeight*2;
            }else{
                let charWidth = textWidth(this.str.charAt(i));
                xCoords.push(this.x); 
                yCoords.push(this.y); 
    
                let particle = new Particle(this.str.charAt(i), this.x, this.y, this.letterSize);
                particles.push(particle);
    
                this.x += charWidth; 
            }

            // new word
            if (this.str.charAt(i) == ' ') {
                if (this.x + textWidth(words[n + 1]) >= x0 + this.boxWidth) {
                    print(textWidth(words[n + 1]));
                    //print("****");
                    //this.x = w/2 - this.boxWidth*.5;
                    this.x = x0;
                    this.y += this.letterHeight;
                }
                n++;
            }
        }

        return particles;
    }
}