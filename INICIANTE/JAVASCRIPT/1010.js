var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = (prompt(' ').split(' ').map(Number))
var [x, y, z] = (prompt(' ').split(' ').map(Number))
X = b*c + y*z

console.log("VALOR A PAGAR: R$ " + X.toFixed(2))
