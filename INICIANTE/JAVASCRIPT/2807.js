var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var a = 1 
var b = 1
var c
var x = ""
var ver = true

if(n == 1){
    console.log(a)
    ver = false
}
else{
    x = a + " " + b 
}

for(i = 2; i < n; i++){
    c = a + b
    x = c + " " + x
    a = b
    b = c
}
if(ver){
console.log(x)
}
