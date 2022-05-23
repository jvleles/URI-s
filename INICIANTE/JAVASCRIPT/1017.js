var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var tempo = prompt("tempo");
var velocidade = prompt("VELOCIDADE");
var distancia = tempo * velocidade;
var litros = distancia / 12;

console.log(litros.toFixed(3));
