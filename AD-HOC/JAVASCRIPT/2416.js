var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [C, N] = (prompt(' ').split(' ').map(Number))

var x = C%N
console.log(x)
