var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var N = prompt("")
var i = 1
var x = 0

for(;x != N;i = i + 4){
    console.log(i + " " + (i+1) + " " + (i+2) + " PUM")
    x = x + 1
}
