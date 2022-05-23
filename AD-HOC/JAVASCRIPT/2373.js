var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")
var qtd = 0

for(i = 0; i < N; i++){
    var [L, C] = prompt("").split(' ').map(Number)
    if(L > C){
        qtd = qtd + C
    }
}

console.log(qtd)
