var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = 1
soma = 0

for(i = 0;x<=39;i++){
    y = x / Math.pow(2,i)
    x = x + 2
    soma = soma + y
}
console.log(soma.toFixed(2))
