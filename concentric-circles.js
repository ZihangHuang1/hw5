function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(400);
      for (var i = 10; i <= 390; i = i + 10) {
    ellipse(width/2, height/2, 15 + (390 - i), 15+ (390 -i))
  }
}
