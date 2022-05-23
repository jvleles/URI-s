var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var L = prompt("")
var C = prompt("")

if(L % 2 == C % 2){
console.log(1);
}else{
console.log(0);
}
