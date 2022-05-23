var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var operacao = prompt("")
var x = []
var soma = 0
var ka = 10

for(i = 0; i < 12; i++){
    x[i] = []
    for(j = 0; j < 12; j++){
        x[i][j] = parseFloat(prompt(""))
    }
}

for(l = 0; l < 11; l++){
    for(k = ka ; k >= 0; k--){
        if(l>k){
        soma = soma + x[l][k]
        }
    }
    ka--
}

if(operacao == "S"){
    console.log(soma.toFixed(1))
}
else if(operacao == "M"){
    var media = soma/30
    console.log(media.toFixed(1))
}
