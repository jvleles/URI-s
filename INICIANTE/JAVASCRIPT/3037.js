var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")
var somaJ = 0
var somaM = 0

for(i = 0; i < N; i++){
    for(j = 0; j < 3; j++){
        var [xJ, dJ] = (prompt(' ').split(' ').map(Number))
        somaJ = somaJ + xJ*dJ
    }
    for(m = 0; m < 3; m++){
        var [xM, dM] = (prompt(' ').split(' ').map(Number))
        somaM = somaM + xM*dM
    }
    if(somaJ > somaM){
        console.log("JOAO")
    }else{
        console.log("MARIA")
    }
    somaJ = 0
    somaM = 0
}
