var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var lista = []

for(i = 0; i < 1000;){
    for(k = 0; k < x && i < 1000;k++){
        lista.push(k)
        console.log("N[" + i + "] = " + lista[i])
        i++
    }
    k = 0
}
