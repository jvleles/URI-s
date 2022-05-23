var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = prompt("pontos").split(" ").map(Number)
var perimetro = a + b + c
var area = (a + b)*c / 2

if( a < b + c &&  b < a + c && c < a + b){
    console.log("Perimetro = " + perimetro.toFixed(1))
}
else{
    console.log("Area = " + area.toFixed(1))
}
