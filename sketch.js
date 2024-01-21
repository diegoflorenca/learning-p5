function setup() {
  createCanvas(500, 500);
  x = 0;
}

function draw() {
  background(155);
  stroke(0);
  line(0, 0, 499, 499);
  line(0, 499, 499, 0);
  noStroke();
  fill(0);
  rect(250, 250, 10, 10);

  noFill();
  rectMode(CENTER);
  stroke(255);

  x = x + 1;
  if (x == 500) {
    x = 0;
  }
  noFill();
  stroke(0);
  rect(250, 250, x, x);
  rect(250, 250, x + 50, x + 50);
  rect(250, 250, x + 150, x + 150);
}
