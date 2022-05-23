var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var X = parseInt(prompt("valor"))

for(var numero = X;	X % 2 != 0 && numero <= X + 10;	numero = numero + 2)	{
    console.log(numero)
}

for(var numero = X + 1;	X % 2 == 0 && numero <= X + 11 ;	numero = numero + 2)	{
    console.log(numero);
}
