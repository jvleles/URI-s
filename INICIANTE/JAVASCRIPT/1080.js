var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var y = 0
var posicao 

for(i = 0;i < 100; i++){
    var x = parseInt(prompt(""))
    if(x > y){
        posicao = i
        y = x
    }
}
console.log(y)
console.log(posicao + 1)
