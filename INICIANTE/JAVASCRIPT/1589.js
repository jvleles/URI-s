var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")

for(i = 0; i < N; i++){
    var [X, Y] = (prompt(' ').split(' ').map(Number))
    var x = X + Y
    console.log(x)
}
