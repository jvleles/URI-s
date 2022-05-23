var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

while (!isNaN(N)) {
    var x = prompt("Valores").split(" ").map(Number);
    var maior = x[0]
    
    for(var i = 1; i < N; i++){
        if(x[i] > maior){
            maior = x[i]
        }
    }
    if(maior < 10){
        console.log(1)
    }
    else if(maior >= 10 && maior < 20){
        console.log(2)
    }
    else if(maior >= 20){
        console.log(3)
    }
    
    N = parseInt(prompt(""))
}
