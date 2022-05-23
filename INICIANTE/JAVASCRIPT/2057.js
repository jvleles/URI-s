var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y, z] = (prompt(' ').split(' ').map(Number))

var h = x + y + z

if(h >= 0 && h < 24){
    console.log(h)
}
else if(h < 0){
    var k = 24 + h
    console.log(k)
}
else if(h > 24){
    var k = h - 24
    console.log(k)
}
else if(h == 24){
    console.log(0)
}
