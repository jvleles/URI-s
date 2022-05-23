var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var distancia = prompt("DISTANCIA");
var tempo = 2 * distancia

console.log(tempo + " minutos")
