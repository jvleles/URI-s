var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var lista = prompt("Valores").split(" ").map(Number);

var menor = lista[0]
var posicao = 0

for(var i = 0; i < N; i++){
    if(lista[i] < menor){
        menor = lista[i]
        posicao = i
    }
}

console.log("Menor valor: " + menor)
console.log("Posicao: " + posicao)
