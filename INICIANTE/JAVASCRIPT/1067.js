var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); }

var X = prompt("valor")

var	impares	=	1;
while(impares	<=	X){
    console.log(impares);
	impares = impares +	2;
}
