var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = 1
soma = 0

for(i = 1;i<=100;i++){
    y = x / i
    soma = soma + y
}
console.log(soma.toFixed(2))
