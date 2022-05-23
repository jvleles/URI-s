var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")

for(i=1;i<=N;i++){
    var x = Math.pow(i,2)
    var y = Math.pow(i,3)
    console.log(i + " " + x + " " + y)
}
