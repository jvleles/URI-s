var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var lista = prompt("Valores").split(" ").map(Number);
var m2 = 0
var m3 = 0
var m4 = 0
var m5 = 0

for(i = 0; i < N; i++){
    if(lista[i] % 2 == 0){
        m2++
    }
        if(lista[i] % 3 == 0){
        m3++
    }
        if(lista[i] % 4 == 0){
        m4++
    }
        if(lista[i] % 5 == 0){
        m5++
    }
}
console.log(m2 + " Multiplo(s) de 2")
console.log(m3 + " Multiplo(s) de 3")
console.log(m4 + " Multiplo(s) de 4")
console.log(m5 + " Multiplo(s) de 5")
