var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [x, y, z] = prompt("numeros").split(" ").map(Number);

if(x > y && x > z && y > z){
    console.log(z)
    console.log(y)
    console.log(x)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
else if(x > y && x > z && y < z){
    console.log(y)                                               	
    console.log(z)
    console.log(x)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
else if(y > x && x > z && y > z){
    console.log(z)
    console.log(x)
    console.log(y)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
else if(y > x && z > x && y > z){
    console.log(x)
    console.log(z)
    console.log(y)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
else if(z > x && z > y && y > x){
    console.log(x)
    console.log(y)
    console.log(z)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
else if(z > x && z > y && x > y){
    console.log(y)
    console.log(x)
    console.log(z)
    console.log("")
    console.log(x)
    console.log(y)
    console.log(z)
}
