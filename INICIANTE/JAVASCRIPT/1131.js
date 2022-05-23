var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var i = 1
var vi = 0
var vg = 0
var em = 0
var qnt = 0

while(i==1){
    var [x, y] = (prompt(' ').split(' ').map(Number))
    if(x > y){
        vi = vi + 1
    }
    else if(x < y){
        vg = vg + 1
    }
    else if(x == y){
        em = em + 1
    }
    qnt = qnt + 1
    console.log("Novo grenal (1-sim 2-nao)")
    var i = prompt("")
}
console.log(qnt + " grenais")
console.log("Inter:" + vi)
console.log("Gremio:" + vg)
console.log("Empates:" + em)
if(vi > vg){
    console.log("Inter venceu mais")
}
else if(vg > vi){
    console.log("Gremio venceu mais")
}
else if(vi == vg){
    console.log("Nao houve vencedor")
}
