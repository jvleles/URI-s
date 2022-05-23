var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b] = prompt("pontos").split(" ").map(Number)

if( a % b == 0){
    console.log("Sao Multiplos")
}
else if(b % a == 0){
    console.log("Sao Multiplos")
}
else{
    console.log("Nao sao Multiplos")
}
