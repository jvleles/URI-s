var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var x = 0

while (!isNaN(N)){
    while(N != 1){
        N = N /2
        x++
    }
    console.log(x)
    
    x = 0
    N = parseInt(prompt(""))
}
