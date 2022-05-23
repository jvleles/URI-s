var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [C, X, R] = (prompt(' ').split(' ').map(Number))

if(R*C > X){
    console.log("N")
}
else{
    console.log("S")
}
