var xoff = 0;
var yoff = 1000;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(51);

	var x = map(noise(xoff),0,1,0, width);
	var y = map(noise(yoff), 0, 1, 0, height);

	ellipse(x,y, 25, 25);

	xoff += .01;
	yoff += .01;
}
