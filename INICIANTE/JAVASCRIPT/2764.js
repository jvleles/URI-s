var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")

console.log(x[3] + x[4] + x[2] + x[0] + x[1] + x[5] + x[6] + x[7])
console.log(x[6] + x[7] + x[5] + x[3] + x[4] + x[2] + x[0] + x[1])
console.log(x[0] + x[1] + "-" + x[3] + x[4] + "-" + x[6] + x[7])
