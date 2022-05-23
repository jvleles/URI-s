var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var raio = parseFloat(input);
var PI = 3.14159;
var area = PI * Math.pow(raio, 2);
console.log("A=" + area.toFixed(4))
