var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var t = prompt("")

var a = 0 
var b = 1
var c
var x = []

x.push(a)
x.push(b)

for(i = 2; i < 61; i++){
    c = a + b
    x.push(c)
    a = b
    b = c
}

for(k = 0;k < t; k++){
    var n = prompt("")
    console.log("Fib(" + n + ") = " + x[n])
}
