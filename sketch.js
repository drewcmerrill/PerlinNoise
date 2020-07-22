var inc = .01;
//var xoff = 0;
//var yoff = 0;
function setup() {
	createCanvas(400, 400);
	pixelDensity(1); //because I have a Mac with a Retina Display
}

function draw() {
	loadPixels();
	var yoff = 0;
	for(var y = 0; y < height; y++)
	{
		xoff = 0;
		for(var x = 0; x < width; x++)
		{
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			pixels[index + 0] = r; //red value
			pixels[index + 1] = r; //green value
			pixels[index + 2] = r; //blue value
			pixels[index + 3] = 255; //alpha value
			xoff += inc;
		}
		yoff += inc;
	}
	updatePixels();

	//first parameter is the number of octaves used to calculate Perlin
	//second paramet is fall off, the factor the octaves shrink. Detail .5 (they halve)
	//noiseDetail();
}
