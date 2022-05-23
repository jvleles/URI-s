var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const[x1, y1] = lines[0].split(" ");
const[x2, y2] = lines[1].split(" ");

function square(numero) {
  return numero*numero;
}

var a = square(x1)-(2*x1*x2)+square(x2);
var b = square(y1)-(2*y1*y2)+square(y2);
var d = Math.sqrt(a+b);
var e = d.toFixed(4);

console.log(e);
