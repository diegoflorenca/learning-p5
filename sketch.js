const bars = [5, 4, 7, 3, 9, 1, 6, 2, 8];
let sorted = false;
let x = 20;
let y = 180;
let selectedIndex = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(10);
}

function draw() {
  background(150);
  rectMode(CENTER);
  for (let index = 0; index < bars.length; index++) {
    const element = bars[index] * 10;
    if (index === selectedIndex && !sorted) {
      fill(0);
    } else if (index === selectedIndex + 1 && !sorted) {
      fill(155);
    } else {
      fill(255);
    }
    rect(x, y, 25, element);
    x += 30;
  }
  x = 20;

  if (bars[selectedIndex] > bars[selectedIndex + 1]) {
    const temp = bars[selectedIndex];
    bars[selectedIndex] = bars[selectedIndex + 1];
    bars[selectedIndex + 1] = temp;
    sorted = false;
  } else {
    sorted = true;
  }

  selectedIndex++;
  if (selectedIndex > bars.length) {
    selectedIndex = 0;
  }
}
