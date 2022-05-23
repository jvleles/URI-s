var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = parseInt(prompt(""))
var y = parseInt(prompt(""))
var soma = 0

if(x > y){
    for(j= y ;j < x+1;j++){
        if(j%13 != 0){
            soma = soma + j
        }
    }
}
else if(y > x){
    for(k= x ;k < y+1;k++){
        if(k%13 != 0){
            soma = soma + k
        }
    }
}
console.log(soma)
