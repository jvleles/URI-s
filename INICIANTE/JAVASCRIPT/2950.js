var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }

var [a, b, c] = (prompt(' ').split(' ').map(Number))

var icm = a / (b + c)

console.log(icm.toFixed(2))
