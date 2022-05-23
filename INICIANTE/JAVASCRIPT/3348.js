var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var k = [2, 7, 5, 30, 169, 441, 1872, 7632, 1740, 93313, 459901, 1358657, 2504881, 13482720, 25779600, 68468401, 610346880, 1271932200, 327280800]

var n = prompt("")

console.log(k[n-1])
