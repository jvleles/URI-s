var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var distancia = prompt("DISTANCIA");
var combustivel = prompt("COMBUSTIVEL");
var kml = distancia / combustivel;

console.log(kml.toFixed(3) + " km/l");
