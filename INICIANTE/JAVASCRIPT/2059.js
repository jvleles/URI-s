var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [p, j1, j2, r, a] = prompt("").split(" ").map(Number)

if(r == 0 && a == 0){
    var k = j1 + j2
    if(k % 2 === 0){
        if(p == 1){
            console.log("Jogador 1 ganha!")
        }else{
            console.log("Jogador 2 ganha!")
        }
    }
    else if(k % 2 !== 0){
        if(p == 0){
            console.log("Jogador 1 ganha!")
        }else{
            console.log("Jogador 2 ganha!")
        }
    }
}
else if(r == 1 && a == 0){
    console.log("Jogador 1 ganha!")
}
else if(r == 1 && a == 1){
    console.log("Jogador 2 ganha!")
}
else if(r == 0 && a == 1){
    console.log("Jogador 1 ganha!")
}
