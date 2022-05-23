var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var c = 0

for(i=0;i<5;i++){
    var x = parseInt(prompt(""))
    if(x%2 === 0){
    c = c + 1
    }
}
console.log(c + " valores pares")
