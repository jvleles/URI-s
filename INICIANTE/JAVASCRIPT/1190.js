var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var operacao = prompt("")
var x = []
var soma = 0
var ka = 1

for(i = 0; i < 12; i++){
    x[i] = []
    for(j = 0; j < 12; j++){
        x[i][j] = parseFloat(prompt(""))
    }
}

for(l = 11; l > 0; l--){
    for(k = ka ; k < 12; k++){
        if(k>l){
        soma = soma + x[l][k]
        }
    }
    ka++
}

if(operacao == "S"){
    console.log(soma.toFixed(1))
}
else if(operacao == "M"){
    var media = soma/30
    console.log(media.toFixed(1))
}
