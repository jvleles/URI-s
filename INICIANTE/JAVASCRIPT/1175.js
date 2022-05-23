var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }; 

var lista = []
var a;

for(i = 0; i < 20; i++){
    var x = prompt("")
    lista.push(x)
}

for(k = 0; k < 10; k++){
	var a = lista[k]
    lista[k] = lista[19-k]
	lista[19-k] = a
}
for(j = 0; j < 20; j++){
    console.log("N[" + j + "] = " + lista[j])
}
