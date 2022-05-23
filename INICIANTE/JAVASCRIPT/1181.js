var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var linha = parseInt(prompt(""))
var operacao = prompt("")
var x = []
var soma = 0

for(i = 0; i < 12; i++){
    x[i] = []
    for(j = 0; j < 12; j++){
        x[i][j] = parseFloat(prompt(""))
    }
}

for(k = 0; k < 12; k++){
    soma = soma + x[linha][k]
}

if(operacao == "S"){
    console.log(soma.toFixed(1))
}
else if(operacao == "M"){
    var media = soma/12
    console.log(media.toFixed(1))
}
