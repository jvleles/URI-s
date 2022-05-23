var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [codigo, qtd] = prompt("codigo e quantidade").split(" ").map(Number)

if(codigo == 1){
 console.log("Total: R$ " + (qtd*4.0).toFixed(2))
}
else if(codigo == 2){
 console.log("Total: R$ " + (qtd*4.5).toFixed(2))
}
else if(codigo == 3){
 console.log("Total: R$ " + (qtd*5.0).toFixed(2))
}
else if(codigo == 4){
 console.log("Total: R$ " + (qtd*2.0).toFixed(2))
}
else if(codigo == 5){
 console.log("Total: R$ " + (qtd*1.5).toFixed(2))
}
