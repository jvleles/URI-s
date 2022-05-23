var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))

if( x < 0 || x > 432 || y < -468 || y > 468 || y < 0){
console.log("fora")
} 
else{
    console.log("dentro")
}
