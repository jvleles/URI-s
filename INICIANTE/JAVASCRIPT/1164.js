var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")
var soma = 0

for(i=0;i<N;i++){
    var x = parseInt(prompt(""))

    for(k=1;k<=x;k++){
        if(x%k==0){
            soma = soma + k
        }
    }
        y = soma - x
        if(y == x){
            console.log(x + " eh perfeito")
        }else{
            console.log(x + " nao eh perfeito")
    }
    soma = 0
}
