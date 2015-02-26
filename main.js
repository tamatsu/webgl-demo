window.onload = function() {
//	window.alert("hello");
	var canvas = document.getElementById('canvas');
	
	//canvas.width = 40;
	canvas.width = 320;
	canvas.height = 240;
	
	var ctx = canvas.getContext('2d');
  	ctx.fillRect(10, 10, 50, 50);
  	
  	var gl = canvas.getContext("webgl");
  	//var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');  	
  	
  	if (gl == null) {
  		window.alert("failed to get webgl context");
  	}
  	
  	
  	
  	gl.clearColor(0.0, 0.0, 0.0, 1.0);
  	gl.clear(gl.COLOR_BUFFER_BIT);

	
};