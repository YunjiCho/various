let colors = ["#F29307", "#0F8C9C", "#F7EB7C", "tomato"];
let c1 = 120;
let s1 = 50;
let e1 = 0.7;
let e1n = 8;
function setup() {
  createCanvas(800, 800);
  background(0);

  let x = random(30, 70);
  let y = random(30, 70);
  let x1 = 50;
  let y1 = 50;

  colorMode(RGB, 255, 255, 255, 100);
  let r = random(colors);
  let g = random(colors);
  let b = random(colors);
  let a = random(colors);

  for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
      //<-원
      fill(random(255), random(255), random(255));
      stroke(random(255), random(255), random(255));
      strokeWeight(random(s1));
      noFill();
      ellipse(
        x * i - x1,
        y * 3 * j - y1,
        c1 * random((e1 / i) * e1n),
        c1 * random((e1 / i) * e1n)
      );
    }
  }

  for (j = 0; j < 100; j++) {
    for (i = 0; i < 100; i++) {
      //밑으로 커지는 원
      fill(random(255), random(255), random(255));
      stroke(random(255), random(255), random(255));
      strokeWeight(random(s1));
      noFill();
      ellipse(
        x * 3 * j - x1,
        y * i - y1,
        c1 * random((e1 / i) * e1n),
        c1 * random((e1 / i) * e1n)
      );
    }
  }

  for (j = 100; j > 0; j--) {
    for (i = 100; i > 0; i--) {
      //밑으로 커지는 원
      fill(random(255), random(255), random(255));
      stroke(random(255), random(255), random(255));
      strokeWeight(random(s1));
      noFill();
      ellipse(
        x * 3 * j - x1,
        y * i - y1,
        c1 * random((e1 * i) / e1n),
        c1 * random((e1 * i) / e1n)
      );
    }
  }

  for (i = 100; i > 0; i--) {
    for (j = 100; j > 0; j--) {
      //->원
      fill(random(255), random(255), random(255));
      stroke(random(255), random(255), random(255));
      strokeWeight(random(s1));
      noFill();
      ellipse(
        x * i - x1,
        y * 3 * j - y1,
        c1 * random((e1 * i) / e1n),
        c1 * random((e1 * i) / e1n)
      );

      //네모
      fill(random(colors));
      stroke(random(255), random(255), random(255));
      strokeWeight(random(s1));
      noFill();
      rectMode(CENTER);
      rect(150 * i - 50, 150 * j - 50, c1 * random(0.2), c1 * random(0.2));
    }
  }
}
