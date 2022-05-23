var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var x = A + B;

console.log("X = " + x);
