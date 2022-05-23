var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var a = 0 
var b = 1
var c
var x = ""

if(n == 1){
    console.log(a)
}
else{
    x = a + " " + b 
}

for(i = 2; i < n; i++){
    c = a + b
    x = x + " " + c
    a = b
    b = c
}
console.log(x)
