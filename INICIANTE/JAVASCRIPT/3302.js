var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

for(i = 0; i < N; i++){
    var x = prompt("")
    console.log("resposta " + (i+1) + ": " + x)
}
