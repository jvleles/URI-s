var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

while (!isNaN(N)){
    console.log(N - 1)
    
    N = parseInt(prompt(""))
}
