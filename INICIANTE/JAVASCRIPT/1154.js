var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var soma = 0

for(i = 0;x>=0;i++){
    soma = soma + x
    x = parseInt(prompt(""))
}
media = soma / i
console.log(media.toFixed(2))
