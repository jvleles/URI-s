var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var valor = prompt("valor")
if( 25 >= valor && valor >= 0){
    console.log("Intervalo [0,25]");
}else if( 50 >= valor && valor > 25){
    console.log("Intervalo (25,50]");
}else if( 75 >= valor && valor > 50){
    console.log("Intervalo (50,75]");
}else if( 100 >= valor && valor > 75){
    console.log("Intervalo (75,100]");
}else if( valor > 100 || valor < 0){
    console.log("Fora de intervalo")
}
