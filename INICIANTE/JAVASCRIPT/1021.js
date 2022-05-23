var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var valor = parseFloat(prompt(""));

var listanotas = [100, 50, 20, 10, 5, 2];
var listamoedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");

for(var nota of listanotas){
    var qnTnotas=parseInt(valor/nota);
    console.log(qnTnotas+" nota(s) de R$ " + nota.toFixed(2));
    valor = valor % nota;
}

valor=parseInt(valor*100);

console.log("MOEDAS:")

for(var moeda of listamoedas){
    var qnTmoedas=parseInt(valor/moeda);
    console.log(qnTmoedas+" moeda(s) de R$ " + (moeda/100).toFixed(2));
    valor = valor % moeda;
}
