var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b] = prompt("pontos").split(" ").map(Number)

if(b > a){
    console.log("O JOGO DUROU " + (b - a) + " HORA(S)")
}
else if(a == b){
    console.log("O JOGO DUROU 24 HORA(S)")
}
else if(a > b){
    console.log("O JOGO DUROU " + (24 - a + b) + " HORA(S)")
}
