var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var soma = 0
var c = 0
var r = 0
var s = 0

for(i=0;i<n;i++){
    var [x, l] = (prompt(' ').split(' '))
    soma = soma + parseInt(x)
    if(l == "C"){
        c = c + parseInt(x)
    }
    else if(l == "R"){
        r = r + parseInt(x)
    }
    else if(l == "S"){
        s = s + parseInt(x)
    }
}
var pc = c*100 / soma
var pr = r*100 / soma
var ps = s*100 / soma

console.log("Total: " + soma + " cobaias")
console.log("Total de coelhos: " + c)
console.log("Total de ratos: " + r)
console.log("Total de sapos: " + s)
console.log("Percentual de coelhos: " + pc.toFixed(2) + " %")
console.log("Percentual de ratos: " + pr.toFixed(2) + " %")
console.log("Percentual de sapos: " + ps.toFixed(2) + " %")
