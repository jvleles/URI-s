var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [a, b] = prompt("").split(" ").map(Number);

while(a != b)	{
    
    if(a > b){
        console.log("Decrescente")
    }
    else if(a < b){
        console.log("Crescente")
    }

    [a, b] = prompt("").split(" ").map(Number);
}
