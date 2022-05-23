var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var T = parseInt(prompt(""))
var [a, b, c, d, e] = (prompt(' ').split(' ').map(Number))
var qtd = 0

if(a == T){
    qtd++
}
if(b == T){
    qtd++
}
if(c == T){
    qtd++
}
if(d == T){
    qtd++
}
if(e == T){
    qtd++
}
console.log(qtd)
