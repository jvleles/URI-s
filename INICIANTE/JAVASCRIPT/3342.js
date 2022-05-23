var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var b
var p

if(N % 2 !== 0){
    b = Math.ceil(N*N/2)
    p = N*N - b
    console.log(b + " casas brancas e " + p + " casas pretas")
}
else if(N % 2 == 0){
    b = N*N/2
    p = b
    console.log(b + " casas brancas e " + p + " casas pretas")
}
