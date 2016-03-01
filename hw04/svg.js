var pic = document.getElementById("vimg");
var b1 = document.getElementById("animate");
var b2 = document.getElementById("stop");
var id;

var drawC = function(){
	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var r = 0;
	c.setAttribute( "cx", 250 );
	c.setAttribute( "cy", 250 );
	c.setAttribute( "r", r );
	c.setAttribute( "fill", "red" );
	c.setAttribute( "stroke", "black" );
	
	pic.appendChild( c );

	var growing = true;
	
	var anim = function(){
		if(r>=250)
			growing = false;
		if(r<=0)
			growing = true;
		if(growing)
			r+=1;
		else
			r-=1
		console.log(r);
		c.setAttribute( "r", r);
	}
	
	id = setInterval(anim, 16);	
};

var clear = function(){
	if(id)
		clearInterval(id);
	var c = document.getElementsByTagName("circle");
	if(c[0])
		c[0].remove();
}

b1.addEventListener("click",drawC);
b2.addEventListener("click",clear);
