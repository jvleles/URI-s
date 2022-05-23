var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var lista = []

for(i=0;i<100;i++){
    var x = parseFloat(prompt(""))
    lista.push(x)
    
    if(lista[i] <= 10){
        console.log("A[" + i + "] = " + lista[i].toFixed(1))
    }
}
