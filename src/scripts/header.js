import 'p5';

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {

  var sketch = function(p){

    var bubbles = [];
    var canvas;

    p.setup = function () {
        canvas = p.createCanvas(window.innerWidth, 400);
        canvas.parent('header-canvas-container');
        for (var i = 0; i < 200; i++) {
            bubbles[i] = new Bubble();
        }
    };

    $(window).resize(function() {
      p.setup();
    });

    p.draw = function () {
        p.background(51);

        for (var i = 0; i < 200; i++) {
            bubbles[i].update();
            bubbles[i].move();
            bubbles[i].show();
        }

        p.translate(window.innerWidth/2, 200);
        p.fill(200);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(169);
        p.text("Dawid Rogowicz", 20, 10);
    }

    function Bubble() {
        this.life = 210;
        this.X = p.mouseX;
        this.Y = p.mouseY;
        this.C1 = p.random(0, 150);
        this.C2 = p.random(50, 255);
        this.size = p.random(10, 30);
        this.velocityX = p.random(-6, 6);
        this.velocityY = p.random(-6, 6);
        this.time = p.random(2.3, 4.5);

        this.update = function () {
            this.life -= this.time;
            if (this.X < 0 || this.X > window.innerWidth || this.Y < 0 || this.Y > 400 || this.life < 10) {
                this.X = p.mouseX;
                this.Y = p.mouseY;
                this.life = 210;
            }
        }

        this.move = function () {
            this.X += this.velocityX;
            this.Y += this.velocityY;

        }

        this.show = function () {
            p.noStroke();
            p.fill(0, this.C1, this.C2, this.life);
            p.ellipse(this.X, this.Y, this.size, this.size);
        }
    }
  };

  var myp5 = new p5(sketch);

}
