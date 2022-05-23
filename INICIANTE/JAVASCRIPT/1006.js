var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var numeros = input.split("\n");

var nota1 = parseFloat(numeros.shift());
var nota2 = parseFloat(numeros.shift());
var nota3 = parseFloat(numeros.shift());
var media = ( nota1 * 2 + nota2 * 3 + nota3 * 5 ) / 10.0

console.log("MEDIA = " + media.toFixed(1));
