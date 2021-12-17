// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Shape(x, y, velX, velY, exist) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exist = exist;
}

function Ball(x, y, velX, velY, exist, color, size) {
    Shape.call(this, x, y, velX, velY, exist);
    this.color = color;
    this.size = size;
}

function EvilCircle(x, y, velX, velY, exist, color, size) {
    Shape.call(this, x, y, 20, 20, exist);
    this.color = 'white';
    this.size = 10;
}

EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.x);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.x);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.y);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.y);
    }
}

EvilCircle.prototype.setControls = function () {
    let _this = this;
    window.onkeydown = function(e) {
        if (e.key === 'a') {
            _this.x -= _this.velX;
        } else if (e.key === 'd') {
            _this.x += _this.velX;
        } else if (e.key === 'w') {
            _this.y -= _this.velY;
        } else if (e.key === 's') {
            _this.y += _this.velY;
        }
    }
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

EvilCircle.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exist = false;
            }
        }
    }
}

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j]) && balls[j].exist) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}

let balls = [];
let evils = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size
    );

    if (balls.length === 0) {
        let evil = new EvilCircle(
            random(0 + size, width - size),
            random(0 + size, height - size),
            20,
            20,
            true,
            'white',
            10
        );
        evils.push(evil)
    }

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exist) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
            evils[0].draw();
            evils[0].checkBounds();
            evils[0].collisionDetect();
        }
    }

    requestAnimationFrame(loop);
}

evils[0].setControls();

loop();



