var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt("Quantidade de valores"))

for(var y = 1; y <= 10; y = y + 1)	{
    var x = y*N
    console.log(y + " x " + N + " = " + x)
}
