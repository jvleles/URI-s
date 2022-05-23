var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var salario = prompt("")

if(salario >= 0 && salario <= 2000){
    console.log("Isento")
}
else if(salario > 2000 && salario <= 3000){
    pagar = (salario - 2000)*0.08
    console.log("R$ " + pagar.toFixed(2))
}
else if(salario > 3000 && salario <= 4500){
    pagar = (salario - 3000)*0.18 + 1000*0.08
    console.log("R$ " + pagar.toFixed(2))
}
else if(salario > 4500){
    pagar = (salario - 4500)*0.28 + 1500*0.18 + 1000*0.08
    console.log("R$ " + pagar.toFixed(2))
}
