var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [a, b, c] = prompt("pontos").split(" ").map(Number)

if(a >= (b+c) || b >= (a+c) || c >= (a+b)){
console.log("NAO FORMA TRIANGULO");
}
else if(Math.pow(a,2) == (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) == (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) == (Math.pow(a,2) + Math.pow(b,2))){
console.log("TRIANGULO RETANGULO");
}
else if(Math.pow(a,2) > (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) > (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) > (Math.pow(a,2) + Math.pow(b,2))){
console.log("TRIANGULO OBTUSANGULO");
}
else if(Math.pow(a,2) < (Math.pow(b,2) + Math.pow(c,2)) || Math.pow(b,2) < (Math.pow(a,2) + Math.pow(c,2)) || Math.pow(c,2) < (Math.pow(a,2) + Math.pow(b,2))){
 console.log("TRIANGULO ACUTANGULO");
}
if(a == b && a == c){
 console.log("TRIANGULO EQUILATERO");
}
if((a == b && a != c)  || (a == c && a != b) || (b == c && b != a)){
 console.log("TRIANGULO ISOSCELES");
}
