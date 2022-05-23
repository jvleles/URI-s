var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))

while(x !== 0 && y !== 0){
    var k = x*y
    console.log(k)
    var [x, y] = (prompt(' ').split(' ').map(Number))
}
