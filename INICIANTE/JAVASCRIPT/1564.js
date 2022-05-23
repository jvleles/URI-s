var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))

while(!isNaN(x)){
    if(x == 0){
        console.log("vai ter copa!")
    }else{
        console.log("vai ter duas!")
    }
    var x = parseInt(prompt(""))
}
