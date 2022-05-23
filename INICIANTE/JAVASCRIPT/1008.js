var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var numerofun = prompt("NUMEROF");
var horast = prompt("HORAST");
var salarioph = prompt("SALARIOPH");
var salario = salarioph * horast;

console.log("NUMBER = " + numerofun);
console.log("SALARY = U$ " + salario.toFixed(2));
