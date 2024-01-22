let bgColor = [150, 23, 90];
let squareColor = [50, 56, 134];
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(...bgColor, 90);

  rectMode(CENTER);
  noStroke();
  fill(...squareColor);

  x = x + 6;

  rect(centerX, centerY, x, x);

  stroke(bgColor);
  line(0, 0, centerX, centerY);
  line(0, height, centerX, centerY);
  line(width, height, centerX, centerY);
  line(width, 0, centerX, centerY);

  fill(bgColor);
  rect(centerX, centerY, 10, 10);

  let windowSize = windowWidth > windowHeight ? windowWidth : windowHeight;

  if (x >= windowSize) {
    x = 0;
    bgColor = squareColor;
    squareColor = [random(255), random(255), random(255)];
  }
}
