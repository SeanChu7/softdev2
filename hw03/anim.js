var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var button = document.getElementById("animate");
var button1 = document.getElementById("stop");
ctx.fillStyle = "#ff0000";

var frameid;

var stopAnim = function(e){
	window.cancelAnimationFrame(frameid);
}

var draw = function(e){
	var x = Math.floor((Math.random() * 460) + 21);
	var y = Math.floor((Math.random() * 460) + 21);
	var cx = 1;
	var cy = 1;
	window.cancelAnimationFrame(frameid);
	var anim = function(e){
		ctx.clearRect(0,0,500,500);
		ctx.beginPath();
		ctx.arc(x,y,20,0,2*Math.PI);
		ctx.fill();
		if(x+20>=500||x<=20)
			cx *= -1;
		if(y+20>=500||y<=20)
			cy *= -1;
		x += cx;
		y += cy;
		frameid = window.requestAnimationFrame(anim);
		console.log(y);
	};
	anim();
}

button.addEventListener("click", draw);
button1.addEventListener("click", stopAnim);
