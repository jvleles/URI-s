var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

for(i = 0; i < N; i++){
    var nome = prompt("")
    var nota = parseFloat(prompt(""))
    var [n1, n2, n3, n4, n5, n6, n7] = (prompt(' ').split(' ').map(Number))
    var media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 - Math.max(n1, n2, n3, n4, n5, n6, n7) - Math.min(n1, n2, n3, n4, n5, n6, n7))*nota
    console.log(nome + " " + media.toFixed(2))
}
