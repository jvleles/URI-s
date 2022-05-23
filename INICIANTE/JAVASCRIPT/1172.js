var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var lista = []

for(i=0;i<10;i++){
    lista[i] = parseInt(prompt(""))
    if(lista[i]> 0){
        console.log("X[" + i + "] = " + lista[i])
    }else{
        console.log("X[" + i + "] = " + 1)
    }
}
