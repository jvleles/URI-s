var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var valor = prompt("VALOR");
var cedula100 = valor / 100;
var cedula50 = (valor % 100) / 50;
var cedula20 = ((valor % 100) % 50 )/ 20;
var cedula10 = (((valor % 100) % 50 ) % 20) / 10;
var cedula5 = ((((valor % 100) % 50 ) % 20) % 10) / 5;
var cedula2 = (((((valor % 100) % 50 ) % 20) % 10) % 5) / 2;
var cedula1 = ((((((valor % 100) % 50 ) % 20) % 10) % 5) % 2);
console.log(valor);
console.log(parseInt(cedula100) + " nota(s) de R$ 100,00");
console.log(parseInt(cedula50) + " nota(s) de R$ 50,00");
console.log(parseInt(cedula20) + " nota(s) de R$ 20,00");
console.log(parseInt(cedula10) + " nota(s) de R$ 10,00");
console.log(parseInt(cedula5) + " nota(s) de R$ 5,00");
console.log(parseInt(cedula2) + " nota(s) de R$ 2,00");
console.log(parseInt(cedula1) + " nota(s) de R$ 1,00");
