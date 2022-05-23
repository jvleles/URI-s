var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

function arredonda(x) { var y = x.toFixed(6); if (y.charAt(y.length - 2) == '5' && y.charAt(y.length - 1) == '0') { var aux = y.split(''); aux[y.length - 2] = '0'; y = parseFloat(aux.join('')); } else { y = x.toFixed(4); } return y; }

var x = parseFloat(prompt(""))
var lista = []

for(i = 0; i < 100; i++){
    lista.push(x)
    x = x/2
    console.log("N[" + i + "] = " + arredonda(lista[i]))
}
