var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b, c, d] = prompt("pontos").split(" ").map(Number)

if(c > a && d > b){
    console.log("O JOGO DUROU " + (c - a) + " HORA(S)" + " E " + (d - b) + " MINUTO(S)")
}
else if(a == b == c == d){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
}
else if(c > a && b > d){
    console.log("O JOGO DUROU " + (c-a-1) + " HORA(S) E " + (60 - b + d) + " MINUTO(S)")
}
else if(a > c && d > b){
    console.log("O JOGO DUROU " + (24-a+c) + " HORA(S) E " + (d - b) + " MINUTO(S)")
}
else if(a > c && b > d){
    console.log("O JOGO DUROU " + (24 - a + c -1) + " HORA(S) E " + (60 - b + d) + " MINUTO(S)")
}
else if(a == c && d > b){
    console.log("O JOGO DUROU 0 HORA(S) E " + (d - b) + " MINUTO(S)")
}
else if(a == c && b > d){
    console.log("O JOGO DUROU 23 HORA(S) E " + (60 - b + d) + " MINUTO(S)")
}
