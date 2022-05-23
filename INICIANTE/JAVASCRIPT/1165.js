var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")

for(i = 0;i<N;i++){
    var saiu = 0
    var x = parseInt(prompt(""))
    for(y = 2;y < x;y++){
        if(x % y === 0){
            console.log(x + " nao eh primo")
            saiu = 1
            break;
        }
    }
    if(saiu === 0){
        console.log(x + " eh primo")
    }
}
