var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var fatorial = 1

for(i = 1; i <=n ; i++){
    fatorial = i*fatorial
}
console.log(fatorial)
