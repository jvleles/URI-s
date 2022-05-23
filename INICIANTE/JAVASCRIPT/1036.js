var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [A, B, C] = prompt("A").split(" ").map(Number)

var D = Math.pow(B , 2) - (4*A*C)
var x1 = (-B - Math.sqrt(D)) / (2*A)
var x2 = (-B + Math.sqrt(D)) / (2*A)
if(D < 0 || A === 0){
    console.log("Impossivel calcular")
}
else{
    console.log("R1 = " + x2.toFixed(5))
    console.log("R2 = " + x1.toFixed(5))
}
