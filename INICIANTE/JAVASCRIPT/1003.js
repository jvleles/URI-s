var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var numeros = input.split("\n");

var A = parseInt(numeros.shift());
var B = parseInt(numeros.shift());
var soma = A + B

console.log("SOMA = " + soma);
