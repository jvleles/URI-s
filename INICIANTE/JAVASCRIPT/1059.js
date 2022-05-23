var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var	pares	=	2;
while(pares	<=	100){
    console.log(pares);
	pares =	pares +	2;
}
