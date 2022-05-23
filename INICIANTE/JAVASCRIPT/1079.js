var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt("Quantidade de valores"))

for(var i = 0; i < N; i++)	{
    var [a, b, c] = prompt("").split(" ").map(Number)
    var media = (2*a.toFixed(1) + 3*b.toFixed(1) + 5*c.toFixed(1)) / 10
    console.log(media.toFixed(1))
}
