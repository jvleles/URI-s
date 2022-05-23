var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var N = prompt("")

for(i = 0; i < N; i++){
    var [x, y] = prompt("").split(" ").map(Number);
    var d = x / y
    if(y == 0){
        console.log("divisao impossivel")
    }
    else{
        console.log(d.toFixed(1))
    }
}
