var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

for(i = 0; i < N; i++){
    var x = prompt("")
    new String(x)
    for(j = 0; j < x.length; j++){
    }
    
    console.log((0.01*(j)).toFixed(2))
}
