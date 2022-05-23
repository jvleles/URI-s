var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))
var k = 0
var j = 0

for(i = 0; i < y; i++){
    var acao = prompt("")
    
    if(acao == "clicou"){
        k++
    }
    else if(acao == "fechou"){
        j++
    }
}

console.log(x - k + j)
