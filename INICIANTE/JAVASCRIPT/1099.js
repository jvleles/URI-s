var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

for(i=0;i<N;i++){
    var [x, y] = (prompt(' ').split(' ').map(Number))
    var soma = 0

    if(x > y){
    for(j= y + 1;j < x;j++){
        if(j%2 != 0){
            soma = soma + j
        }
    }
}
else if(y > x){
    for(k= x + 1;k < y;k++){
        if(k%2 != 0){
            soma = soma + k
        }
    }
}
console.log(soma)
}
