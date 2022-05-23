var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var nomev = prompt("NOMEV");
var salariof = parseFloat(prompt("SALARIOF"));
var vendasmes = parseFloat(prompt("VENDASMES"));
var salariofinal = salariof + vendasmes*0.15;

console.log("TOTAL = R$ " + salariofinal.toFixed(2));
