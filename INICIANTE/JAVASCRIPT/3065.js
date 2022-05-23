var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }

var n = prompt("")
var c = 0

for(i = 1; c < 1; i++){
	if(n == 0){
	c++
	}else{
    var e = prompt("")
    var r = eval(e)
    
    console.log("Teste " + i)
    console.log(r)
    console.log()
	}
    
    var n = prompt("")
}
