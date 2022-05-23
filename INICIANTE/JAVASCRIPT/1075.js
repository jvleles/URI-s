var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt("Quantidade de valores"))

for(var x = 0; x < 10000; x++)	{
    if(x % N == 2){
        console.log(x)
    }
}
