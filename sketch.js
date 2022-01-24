const canvasWidth = 800;
const canvasHeight = 600;
function setup() {
	createCanvas(canvasWidth, canvasHeight); // make an HTML canvas element width x height pixels
}

let prevMin;
function draw() {
	background(225); // sets color of canvas background
	textSize(32);

	noFill();
	circle(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2);

	// Second
	push();
	let displacedSecBy90Deg = second() - 15;
	let size = 10;
	let speed = 2;
	size = map(sin(frameCount * speed), -1.0, 1.0, 10, 30);
	translate(p5.Vector.fromAngle(displacedSecBy90Deg * ((2 * PI) / 60), canvasWidth / 4));
	ellipse(canvasWidth / 2, canvasHeight / 2, size, size);
	pop();

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

	// Hour
	fill(180);
	text(hour(), 10, 30); // Displays information specified in first parameter in x and y position
	
	// Minute
	fill(100);
	if (prevMin !== minute()) {
		console.log(minute());
	}
	prevMin = minute();
	text(minute(), 10, 60);
	
	// Second
	fill(0);
	text(second(), 10, 90);
}
