var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var button = document.getElementById("clear");
var button1 = document.getElementById("curve");
ctx.fillStyle = "#ff0000";

var prevX;
var prevY;
var starting = true;
var line = true;

var clear = function(e) {
	e.preventDefault();
	starting = true;
	ctx.clearRect(0,0,500,500);
}

var toggle = function(e) {
	e.preventDefault();
	if(line)
		line = false;
	else
		line = true;	
	console.log(line);
}

var drawDot = function(e) {
	e.preventDefault();
	if(!starting){
		ctx.beginPath();
		ctx.moveTo(prevX, prevY);
		if(line)
			ctx.lineTo(e.offsetX, e.offsetY);
		else
			ctx.quadraticCurveTo(250,250,e.offsetX,e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc( prevX, prevY, 10, 0, 2 * Math.PI );
		ctx.fill();
	}
	else{
		starting = false;
	}
	ctx.beginPath();
	ctx.arc( e.offsetX, e.offsetY, 10, 0, 2 * Math.PI );
	ctx.fill();
	prevX = e.offsetX;
	prevY = e.offsetY;
	console.log(line);
}

button.addEventListener( "click", clear );
button1.addEventListener( "click", toggle );
c.addEventListener("click", drawDot );
