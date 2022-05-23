var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = prompt("").split(" ").map(Number)

var aumento = y - x
var p = aumento*100/x

console.log(p.toFixed(2) + "%")
