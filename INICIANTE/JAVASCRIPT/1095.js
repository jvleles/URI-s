var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var I = 1
var J = 60

for(;J>=0;){
    console.log("I=" +I + " " + "J=" + J)
    I = I + 3
    J = J - 5
    
}
