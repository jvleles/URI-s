var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = prompt("").split(" ").map(Number)
var soma = 0

while(x !== 0 && y !==0){
    soma = x + y
    console.log(soma)
    var [x, y] = prompt("").split(" ").map(Number)
}
