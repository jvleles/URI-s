var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var y = parseInt(prompt(""))
var soma = 0

if(x > y){
    for(i= y + 1;i < x;i++){
        if(i%2 != 0){
            soma = soma + i
        }
    }
}
else if(y > x){
    for(i= x + 1;i < y;i++){
        if(i%2 != 0){
            soma = soma + i
        }
    }
}
console.log(soma)
