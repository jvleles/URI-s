var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var a = 0
var g = 0
var d = 0

for(;n != 4;){
    if(n == 1){
        a = a + 1
    }
    else if(n == 2){
        g = g + 1
    }
    else if(n == 3){
        d = d + 1
    }
    var n = prompt("")
}
console.log("MUITO OBRIGADO")
console.log("Alcool: " + a)
console.log("Gasolina: " + g)
console.log("Diesel: " + d)
