var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))
var n = ""

while(x > 0 && y > 0){
    var soma = 0
    if(x > y){
    for(j = y;j < x+1;j++){
            soma = soma + j
            n = n + j + " "
    }
}
    else if(y > x){
    for(k= x ;k < y+1;k++){
            soma = soma + k
            n = n + k + " "
    }
}
console.log(n+"Sum=" + soma)
var [x, y] = (prompt(' ').split(' ').map(Number))
n = ""
}
