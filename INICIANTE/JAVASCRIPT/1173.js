var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var lista = []

for(i=0;i<10;i++){
    lista.push(x)
    x = x*2
    console.log("N[" + i + "] = " + lista[i])
}
