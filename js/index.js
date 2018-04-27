//Initial Setup
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

var colors = [
	'indigo',
	'MediumOrchid',
	'royalBlue',
	'MidnightBlue'
];

var gravity = 0.5;
var friction = 0.98;


// Event Listeners
addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", function() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
  init();
});

addEventListener("click", function(event) {
	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;
 
	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}

		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
  };

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 15, false);
		ctx.fillStyle = 'rgba(221, 25, 204, 0.5)';
		ctx.fill();
		ctx.stroke();
    ctx.lineWidth=6
    ctx.strokeStyle = 'rgba(0, , 250, 0.5)';
		ctx.closePath();
	};
}

function Heart(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}

		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();     
	};

	this.draw = function() {
		ctx.beginPath();
		 ctx.moveTo(75+this.x, 40+this.y);
    ctx.bezierCurveTo(75+this.x, 37+this.y, 70+this.x, 25+this.y, 50+this.x, 25+this.y);
    ctx.bezierCurveTo(20+this.x, 25+this.y, 20+this.x, 62.5+this.y, 20+this.x, 62.5+this.y);
    ctx.bezierCurveTo(20+this.x, 80+this.y, 40+this.x, 102+this.y, 75+this.x, 120+this.y);
    ctx.bezierCurveTo(110+this.x, 102+this.y, 130+this.x, 80+this.y, 130+this.x, 62.5+this.y);
    ctx.bezierCurveTo(130+this.x, 62.5+this.y, 130+this.x, 25+this.y, 100+this.x, 25+this.y);
    ctx.bezierCurveTo(85+this.x, 25+this.y, 75+this.x, 37+this.y, 75+this.x, 40+this.y);
		ctx.fillStyle = 'rgba(128, 50, 204, 0.7)';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
  };
}
 
function Rect(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}
  
		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw(); 
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.radius, 40, Math.PI * 30, false);
ctx.fillStyle = 'rgba(25, 0, 255, 0.2)';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
  }
}

ctx.fillRect(100+this.x, 100+this.y, 100, 100);

 
function Line(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}
  
		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw(); 
	};

	this.draw = function() {
		ctx.beginPath();
    ctx.moveTo(45+this.x, 20+this.y);
	  ctx.lineTo(10+this.x, 55+this.y);
    ctx.lineTo(4+this.x, 20+this.y);
    ctx.lineWidth=5
		ctx.fillStyle = 'rgba(75, 0, 139, 0.5)';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
  };
}
 
function Line(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}
  
		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw(); 
	};

	this.draw = function() {
		ctx.beginPath();
    ctx.moveTo(45+this.x, 20+this.y);
	  ctx.lineTo(10+this.x, 55+this.y);
    ctx.lineTo(4+this.x, 20+this.y);
    ctx.lineWidth=5
		ctx.fillStyle = 'rgba(75, 0, 139, 0.5)';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
  };
}

// Implementation
var ballArray = [];
var heartArray = [];
var rectArray = [];
var linearray = [];
    
function init() {
	ballArray = [];

	for (let i = 0; i < 30; i++) {
		var radius = randomIntFromRange(20, 35);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(100, canvas.height - radius);
		var dx = randomIntFromRange(-2, 3)
		var dy = randomIntFromRange(-2, 2)
	    ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
	}

  heartArray = [];
	
	for (let i = 0; i < 20; i++) {
		var radius = randomIntFromRange(1, 1);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-3, 3)
		var dy = randomIntFromRange(-2, 2)
	    heartArray.push(new Heart(x, y, dx, dy, radius, randomColor(colors)));
  }

  rectArray = [];
	
	for (let i = 0; i < 20; i++) {
		var radius = randomIntFromRange(40, 45);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-3, 3)
		var dy = randomIntFromRange(-2, 2)
	    rectArray.push(new Rect(x, y, dx, dy, radius, randomColor(colors)));
  }
  
  lineArray = [];
	
	for (let i = 0; i < 18; i++) {
		var radius = randomIntFromRange(20, 50);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-3, 3)
		var dy = randomIntFromRange(-2, 2)
	    lineArray.push(new Line(x, y, dx, dy, radius, randomColor(colors)));
 }
}

// Animation Loop

function animate() {
	requestAnimationFrame(animate);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
  }
  	for (let i = 0; i < ballArray.length; i++) {
		ballArray[i].update();
	}
  for (let i = 0; i < heartArray.length; i++) {
		heartArray[i].update();
	}
    for (let i = 0; i < lineArray.length; i++) {
		lineArray[i].update();
 }
}

init(); 
animate();