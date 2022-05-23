var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var H = prompt("").split(' ').map(Number)
var padrao = 0

if (N > 2) {
    for(var i = 2; i < N; i++){
        if ((H[i-2] > H[i-1] && H[i-1] < H[i]) || (H[i-2] < H[i-1] && H[i-1] > H[i])){
	    	padrao = 1;
	    	} else {
	    		var padrao = 0
		    	break
	    	}
	   	}
	} else { 
	if (H[0] != H[1]){
	    var padrao = 1
	} 
}

console.log(padrao)
