var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var numeros = input.split("\n");

var nota1 = parseFloat(numeros.shift());
var nota2 = parseFloat(numeros.shift());
var media = ( nota1 * 3.5 + nota2 * 7.5 ) / 11.0

console.log("MEDIA = " + media.toFixed(5));
