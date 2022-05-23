var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var x = ""

for(i = 1; i < N; i++){
    x = x + "Ho "
}
x = x + "Ho!"

console.log(x)
