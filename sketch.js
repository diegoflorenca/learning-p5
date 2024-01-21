function setup() {
  createCanvas(500, 500);
  x = 0;
}

function draw() {
  background(mouseX, mouseY, (mouseX + mouseY) / 2);
  stroke(0);
  line(0, 0, mouseX, mouseY);
  line(0, 499, mouseX, mouseY);
  line(250, 0, mouseX, mouseY);
  line(0, 250, mouseX, mouseY);
  line(499, 250, mouseX, mouseY);
  line(250, 499, mouseX, mouseY);
  line(499, 499, mouseX, mouseY);
  line(499, 0, mouseX, mouseY);

  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(mouseX, mouseY, 10, 10);

  noFill();
  stroke(255);

  x = x + 12;
  if (x >= 500) {
    x = 0;
  }
  noFill();
  stroke(0);
  rect(mouseX, mouseY, x, x);
  rect(mouseX, mouseY, x + 60, x + 60);
  rect(mouseX, mouseY, x + 150, x + 150);
  circle(mouseX, mouseY, x);
}
