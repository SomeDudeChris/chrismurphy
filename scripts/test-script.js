//Setting up variables

let cols, rows;
let scl = 20;
let widthOfGrid = 1600;
let heightOfGrid = 600

let flying = 0;


//creating an array of an array
let terrain = [];

function setup() {    
  cnv = createCanvas(800, 400, WEBGL);
  cnv.parent('test-sketch');
  background(0);
  textSize(40);
  //textColor(255);

  cols = widthOfGrid / scl;
  rows = heightOfGrid / scl;

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}
  
function draw() {
  background(0);
  stroke(1);
  //noFill();

  flying -= 0.03;
  let yoff = flying;

  for (let y = 0; y < rows; y++) { 
    let xoff = 0;
      for(let x = 0; x < cols; x++){
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }


  
  rotateX(PI/3);

  translate(-widthOfGrid / 2, -heightOfGrid / 2);
  

  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}