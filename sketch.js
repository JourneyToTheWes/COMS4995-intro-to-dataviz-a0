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

	push();
	let displacedSecBy90Deg = second() - 15;
	translate(p5.Vector.fromAngle(displacedSecBy90Deg * ((2 * PI) / 60), canvasWidth / 4));
	circle(canvasWidth / 2, canvasHeight / 2, 10);
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
