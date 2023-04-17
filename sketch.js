let n = 0
let c = 10

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	angleMode(DEGREES)
	colorMode(HSB)
	background(0)

}

function draw() {
	// put drawing code here
	translate(width/2, height/2)
	let a = n * 137.5
	let r = c*sqrt(n)
	let x = r*cos(a)
	let y = r*sin(a)


	// fill(n%256,255, 255)//this creates a ringed pattern 
	fill((a-r)%256,255,255)//this create a patter along the spiral
	ellipse(x,y,8,8)

	n++

}
