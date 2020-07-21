var inc = .01; //changing inc essentially "zooms in" on the graph
var start = 0;
function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(51);
	stroke(255);
	noFill();
	beginShape();
	var yoff = start;
	for(var x = 0; x < width; x++)
	{
		stroke(255);
		var y = map(noise(yoff), 0, 1, 0, height);
		vertex(x, y);
		yoff += inc;
	}
	endShape();
	start += inc;
}
