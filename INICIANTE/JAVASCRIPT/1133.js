var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var y = parseInt(prompt(""))

if(x > y){
    for(var i = y + 1; i < x ; i++){
        if(i % 5 == 2 || i % 5 == 3){
            console.log(i)
        }
    }
}
else if(x < y){
    for(var i = x + 1; i < y ; i++){
        if(i % 5 == 2 || i % 5 == 3){
            console.log(i)
        }
    }
}
