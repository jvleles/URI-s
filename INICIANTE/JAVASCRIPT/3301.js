var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y, z] = prompt("").split(" ").map(Number);
var soma = x + y + z
var meio = soma - Math.max(x, y, z) - Math.min(x, y, z)

if(meio == x){
    console.log("huguinho")
}
else if(meio == y){
    console.log("zezinho")
}
else if(meio == z){
    console.log("luisinho")
}
