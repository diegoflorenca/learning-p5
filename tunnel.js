let bgColor = [150, 23, 90];
let squareColor = [50, 56, 134];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  centerX = width / 2;
  centerY = height / 2;
  aspectRatio = windowWidth / windowHeight;
}

function draw() {
  background(...bgColor, 90);

  rectMode(CENTER);
  noStroke();
  fill(...squareColor);

  // Growing shape speed
  x = x + 10;
  // Middle shape considering the screen aspect ratio
  rect(centerX, centerY, x, x / aspectRatio);
  // Cross lines
  stroke(bgColor);
  line(0, 0, centerX, centerY);
  line(0, height, centerX, centerY);
  line(width, height, centerX, centerY);
  line(width, 0, centerX, centerY);
  // Growing shape
  fill(bgColor);
  rect(centerX, centerY, 10, 10 / aspectRatio);
  // Store the screen largest dimension
  let windowSize =
    windowWidth > windowHeight ? windowWidth : windowHeight * aspectRatio;
  // Start a new shape animation when the current shape has the same size as the screen
  if (x >= windowSize) {
    x = 0;
    bgColor = squareColor;
    squareColor = [random(255), random(255), random(255)];
  }
}
