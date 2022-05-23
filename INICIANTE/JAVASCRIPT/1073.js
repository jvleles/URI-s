var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var X = parseInt(prompt("valor"))

for(var numero = 2;numero <= X;	numero = numero + 2)	{
    console.log(numero + "^2 = " + numero*numero)
}
