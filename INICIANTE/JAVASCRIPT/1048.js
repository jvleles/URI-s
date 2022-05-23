var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a] = prompt("pontos").split(" ").map(Number)

if(a < 400 || a == 400){
console.log("Novo salario: " + (a + a*0.15).toFixed(2))
console.log("Reajuste ganho: " + (a*0.15).toFixed(2))
console.log("Em percentual: 15 %")
}
else if(a > 400 && a < 800 || a == 800){
console.log("Novo salario: " + (a + a*0.12).toFixed(2))
console.log("Reajuste ganho: " + (a*0.12).toFixed(2))
console.log("Em percentual: 12 %")
}
else if(a > 800 && a < 1200 || a == 1200){
console.log("Novo salario: " + (a + a*0.10).toFixed(2))
console.log("Reajuste ganho: " + (a*0.10).toFixed(2))
console.log("Em percentual: 10 %")
}
else if(a > 1200 && a < 2000 || a == 2000){
console.log("Novo salario: " + (a + a*0.07).toFixed(2))
console.log("Reajuste ganho: " + (a*0.07).toFixed(2))
console.log("Em percentual: 7 %")
}
else if(a > 2000){
console.log("Novo salario: " + (a + a*0.04).toFixed(2))
console.log("Reajuste ganho: " + (a*0.04).toFixed(2))
console.log("Em percentual: 4 %")
}
