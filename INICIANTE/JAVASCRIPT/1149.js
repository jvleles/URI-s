var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var valores = prompt("").split(" ").map(Number)

var a = valores[0]

var i = 1

while (valores[i] <= 0) {
    i++
}

var n = valores[i]

var soma = 0

for(var i=0;i <= n-1;i++){
	soma = soma + a + i
}
console.log(soma)
