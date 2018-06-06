$(document).ready(function(){

	function drawSetup(path){
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight) * 20;
		var pathLength = path.getTotalLength();
		console.log(scrollPercentage);
		if (scrollPercentage >= 0.1) {
		    path.style.strokeDasharray = "none";
		} else {
		    path.style.strokeDasharray = pathLength + ' ' + pathLength;
		}
		path.style.strokeDashoffset = pathLength;
		return pathLength;
	}

	function drawForwards(path, pathLength) {
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight) * 20;
		if (scrollPercentage >= 0.98) {
			console.log("toofar");
		} else {
			console.log(scrollPercentage);
			console.log(document.documentElement.scrollHeight);
			console.log(document.documentElement.clientHeight);
			var drawLength = pathLength * scrollPercentage;
			path.style.strokeDashoffset = pathLength - drawLength;
		}
	}

	function drawBackwards(path, pathLength) {
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight) * 20;
		if (scrollPercentage >= 0.98) {
			console.log("toofar");
		} else {
			var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight) * 20;
			var drawLength = pathLength * scrollPercentage;
			path.style.strokeDashoffset = pathLength + drawLength;
		}
	}




	var path1 = document.querySelector("#path1");
	var path2 = document.querySelector("#path2");

	pathLength1 = drawSetup(path1);
	pathLength2 = drawSetup(path2);

	window.addEventListener("scroll", function(e) {
		drawForwards(path1, pathLength1);
		drawBackwards(path2, pathLength2);
	});

});