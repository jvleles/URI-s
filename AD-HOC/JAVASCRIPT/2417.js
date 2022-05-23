var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y, z, a, b, c] = (prompt(' ').split(' ').map(Number))

var p1 = 3*x + y
var p2 = 3*a + b

if(p1 > p2){
    console.log("C")
}
else if(p2 > p1){
    console.log("F")
}
else if(p1 == p2){
    if(z > c){
        console.log("C")
    }
    else if(c > z){
        console.log("F")
    }
    else if(z == c){
        console.log("=")
    }
}
