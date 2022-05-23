var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var contador = 0
var soma = 0

for(i=0;i<6;i++){
    var x = parseFloat(prompt(""))
    if(x > 0){
    contador = contador + 1
    soma = soma + x
    }
}
media = soma/contador
console.log(contador + " valores positivos")
console.log(media.toFixed(1))
