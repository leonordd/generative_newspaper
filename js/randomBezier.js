class RandomBezier{
    constructor(/*x, y, boxWidth, boxHeight*/){
       /*this.x = x;
        this.y = y;
        this.boxWidth = boxWidth;
        this.boxHeight = boxHeight;*/
    }

    setValues(x, y, boxWidth, boxHeight){

    }

    getPoints(x_coordinates, y_coordinates) {
        let listOfPoints = []
        for (let i = 0; i < 100; i+=1/100) {
        let coord_x = bezierPoint(x_coordinates[0], x_coordinates[1], x_coordinates[2], x_coordinates[3], i);
        let coord_y = bezierPoint(y_coordinates[0], y_coordinates[1], y_coordinates[2], y_coordinates[3], i);
        listOfPoints.push([coord_x, coord_y]);
        }
        return listOfPoints;
    }
  


    randomBezierCurve(x, y, boxWidth, boxHeight) {
        // extremidades da box de texto
        let options = [[x, y], [x + boxWidth, y]]
        let rand_index = int(random(0, 2));
        // print("option: " + rand_index);
        
        let x1,x2,x3,x4,y1,y2,y3,y4;
        x1 = options[rand_index][0];
        y1 = options[rand_index][1];
      
        if (rand_index == 0) {
          x2 = random(x, x + boxWidth / 2)
          y2 = random(y, boxHeight)
        
          x3 = random(x + boxWidth / 2, boxWidth)
          y3 = random(y, boxHeight) + 100
        }
      
        else {
          x2 = random(x + boxWidth / 2, boxWidth)
          y2 = random(y, boxHeight/2) + 100
        
          x3 = random(x, x + boxWidth / 2)
          y3 = random(y, boxHeight)
        }
      
        if (rand_index == 0) {
          x4 = x + boxWidth;
          y4 = y + boxHeight; 
        }
      
        else {
          x4 = x;
          y4 = y + boxHeight; 
        }

        noFill();
        bezier(x1,y1,x2,y2,x3,y3,x4,y4);
        return {"x1":x1, "x2":x2, "x3":x3, "x4":x4, "y1":y1, "y2":y2, "y3":y3, "y4":y4}
      }

}