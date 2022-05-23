var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var s = ""

while(x !== 0){
    s = ""
    for(i=1;i<x;i++){
        s = s + i + " "
    }
    s = s + x
    console.log(s)
    var x = parseInt(prompt(""))
}
