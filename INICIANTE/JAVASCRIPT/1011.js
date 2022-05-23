var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var raio = prompt("raio")
var PI = 3.14159;
var volume = parseFloat(4/3 * PI * Math.pow(raio, 3));

console.log("VOLUME = " + volume.toFixed(3));
