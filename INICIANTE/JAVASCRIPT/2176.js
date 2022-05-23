var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var S = prompt("")
new String(S)
var qtd = 0

for(i = 0; i < S.length; i++){
    if(S[i] == "1"){
        qtd++
    }
}

if(qtd % 2 == 0){
    console.log(S + "0")
}
else if(qtd % 2 !== 0){
    console.log(S + "1")
}
