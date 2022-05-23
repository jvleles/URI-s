var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = (prompt(' ').split(' ').map(Number))

if(a >= b && a >= c){
    console.log(a + " eh o maior")
}
else if(b >= a && b >= c){
    console.log(b + " eh o maior")
}
else{
    console.log(c + " eh o maior")
}
