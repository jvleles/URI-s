var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")

if(x.length >= 10){
console.log("palavrao")
}else{
console.log("palavrinha")
}
