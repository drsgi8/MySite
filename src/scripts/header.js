var bubbles = [];
var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, 400);
    canvas.parent('header-canvas-container');
    for (var i = 0; i < 200; i++) {
        bubbles[i] = new Bubble();
    }
}

$(window).resize(function() {
  setup();
});

function draw() {
    background(51);

    for (var i = 0; i < 200; i++) {
        bubbles[i].update();
        bubbles[i].move();
        bubbles[i].show();
    }

    translate(window.innerWidth/2, 200);
    fill(200);
    textAlign(CENTER, CENTER);
    textSize(169);
    text("Dawid Rogowicz", 20, 10);
}

function Bubble() {
    this.life = 210;
    this.X = mouseX;
    this.Y = mouseY;
    this.C1 = random(0, 150);
    this.C2 = random(50, 255);
    this.size = random(10, 30);
    this.velocityX = random(-6, 6);
    this.velocityY = random(-6, 6);
    this.time = random(2.3, 4.5);

    this.update = function () {
        this.life -= this.time;
        if (this.X < 0 || this.X > window.innerWidth || this.Y < 0 || this.Y > 400 || this.life < 10) {
            this.X = mouseX;
            this.Y = mouseY;
            this.life = 210;
        }
    }

    this.move = function () {
        this.X += this.velocityX;
        this.Y += this.velocityY;

    }

    this.show = function () {
        noStroke();
        fill(0, this.C1, this.C2, this.life);
        ellipse(this.X, this.Y, this.size, this.size);
    }
}
