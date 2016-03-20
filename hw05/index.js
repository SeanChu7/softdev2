var loc = ["Alabama","Alaska","American Samoa","Arizona","Arkansas",
"California","Colorado","Connecticut","Delaware","District of Columbia",
"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa",
"Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska",
"Nevada","New Hampshire","New Jersey", "New Mexico","New York","North Carolina",
"North Dakota","Northern Marianas","Ohio","Oklahoma","Oregon",
"Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
"South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands",
"Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var pl = [50,28,0,58,40,172,37,28,16,19,99,76,0,19,32,69,57,30,40,46,46,
23,38,42,59,38,40,52,27,36,30,23,51,24,95,72,0,9,66,43,28,17,23,19,50,29,
58,155,40,16,6,49,44,34,42,26];
var up = [0,0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,28,0,0,0,0,54,0,0,0,0,0,0,0,0,3,0,0,0,0,3];

var dataset = [];
console.log(up.length);
for (var i = 0; i < loc.length; i++){
	var info = [loc[i],pl[i],up[i]];
	dataset.push(info);
}

var hold = d3.select("body").select(".chart")
	.data(dataset)
    .enter()
    .append("div")
    .attr("class","chart");

hold.append("p")
	.text(function(d){
		return d[0];
	});
hold.append("div")
	.attr("class","bar")
	.style("width", function(d){
		return d[1]*5 + "px";
	})
	.text(function(d){
		return d[1];
	});

hold.append("div")
	.attr("class","bar")
	.style("width", function(d){
		return d[2]*5 + "px";
	})
	.style("background-color","gray")
	.text(function(d){
		return d[2];
	});

hold.append("div")
	.attr("class","bar")
	.style("width", function(d){
		return (d[2]+d[1])*5 + "px";
	})
	.style("background-color","cyan")
	.text(function(d){
		return d[2]+d[1];
	});