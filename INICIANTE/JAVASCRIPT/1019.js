var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var qtdsegundos = prompt("qtdsegundoss");
var horas = parseInt(qtdsegundos / 3600);
var minutos = parseInt(qtdsegundos % 3600 / 60);
var segundos = (qtdsegundos % 3600) % 60;
console.log(horas + ":" + minutos + ":" + segundos);
