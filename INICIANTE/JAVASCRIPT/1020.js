var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var qtddias = prompt("DIAS");
var anos = parseInt(qtddias / 365)
var meses = parseInt((qtddias % 365) / 30)
var dias = (qtddias % 365) % 30
console.log(anos + " ano(s)")
console.log(meses + " mes(es)")
console.log(dias + " dia(s)")
