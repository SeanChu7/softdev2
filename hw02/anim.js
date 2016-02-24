var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var button = document.getElementById("animate");
var button1 = document.getElementById("stop");
ctx.fillStyle = "#ff0000";

var frameid;

var stopAnim = function(e){
    window.cancelAnimationFrame(frameid);
}
var anim = function(e){
    var r = 0;
    var growing = true;
    window.cancelAnimationFrame(frameid);
    var animCode = function() {
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(250,250, r, 0, 2*Math.PI);
	ctx.fill();
	console.log(r);
	if(growing)
	    r += 1;
	else
	    r -= 1;
	if(r>=250)
	    growing = false;
	if(r<=0)
	    growing = true;
	frameid = window.requestAnimationFrame(animCode);
	console.log(frameid);
    };
    animCode();
}

button.addEventListener("click", anim);
button1.addEventListener("click", stopAnim);
