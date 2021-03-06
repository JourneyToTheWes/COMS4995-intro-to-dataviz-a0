let canvasWidth = 800;
let canvasHeight = 600;
function setup() {
	createCanvas(canvasWidth, canvasHeight); // make an HTML canvas element width x height pixels
}

let prevMin;
function draw() {
	background('rgb(220, 220, 220)'); // sets color of canvas background
	textSize(32);

	noFill();
	noStroke();
	circle(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2);

	// Hour
	push();
	strokeWeight(10);
	strokeCap(SQUARE);
	angleMode(DEGREES);
	let hourIncrement = 15;
	let totalHourInDegrees = hour() * hourIncrement;

	for (let i = 0; i < totalHourInDegrees; i += 15) {
		stroke(i, 150, 200);
		let xPos = canvasWidth / 2;
		let yPos = canvasHeight / 2;
		let radius = canvasWidth / 4;
		line(xPos, yPos, xPos + radius * sin(i), yPos - radius * cos(i));
	}
	pop();

	// Minute
	push();
	if (prevMin !== minute()) {
		console.log(minute());
	}
	prevMin = minute();
	angleMode(DEGREES);
	stroke(255);
	fill(255,255,255);
	let displacedMinBy90Deg = minute() - 15;
	let x = canvasWidth / 2;
	let y = canvasHeight / 2;
	translate(p5.Vector.fromAngle(displacedMinBy90Deg * ((2 * PI) / 60), canvasWidth / 4));
	let angle = 360 / 3;
	let minuteTriangleSize = 20;
	let minuteTriangleSpeed = 3;
	minuteTriangleSize = map(sin(frameCount * minuteTriangleSpeed), -1.0, 1.0, 20, 30);
	beginShape();
	for (let i = 0; i < 360; i += angle) {		
		let x2 = x + sin(i) * minuteTriangleSize;
		let y2 = y + cos(i) * minuteTriangleSize;
		vertex(x2, y2);
	}
	endShape(CLOSE);
	pop();

	// Second
	push();
	fill(0, 0, 0);
	let displacedSecBy90Deg = second() - 15;
	let secondEllipseSize = 10;
	let secondEllipseSpeed = 2;
	secondEllipseSize = map(sin(frameCount * secondEllipseSpeed), -1.0, 1.0, 10, 30);
	translate(p5.Vector.fromAngle(displacedSecBy90Deg * ((2 * PI) / 60), canvasWidth / 4));
	ellipse(canvasWidth / 2, canvasHeight / 2, secondEllipseSize, secondEllipseSize);
	pop();
}
