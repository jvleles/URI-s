var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [A, B, C, D] = prompt("A").split(" ").map(Number)

if(B > C && D > A && C + D > A + B && C + D > 0 && A + B > 0 && A % 2 == 0){
console.log("Valores aceitos")
    
}
else{
    console.log("Valores nao aceitos")
}
