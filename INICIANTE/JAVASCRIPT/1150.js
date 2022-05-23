var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var z = parseInt(prompt(""))
var soma = 0
var contador = 0

while(x>=z){
    z = parseInt(prompt(""))
}

for(;soma<=z;x++){
    soma = soma + x
    contador += 1
}
console.log(contador)
