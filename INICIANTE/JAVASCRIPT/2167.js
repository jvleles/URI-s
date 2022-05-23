var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var lista = (prompt(' ').split(' ').map(Number))
var queda = 0

for(i = 1; i < N; i++){
    if(lista[i] < lista[i-1]){
        queda = i + 1
        break
    }
}

console.log(queda)
