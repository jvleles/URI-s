var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }

var N = parseInt(prompt(""))
var cg = 0
var cv = 0

for(i = 0; i < N; i++){
    var [x, y] = prompt("").split(" ")
    
    if(x == "G"){
        cg += parseInt(y)
    }
    else if(x == "V"){
        cv += parseInt(y)
    }
}

if(cg > cv){
    console.log("NAO VAI TER CORTE, VAI TER LUTA!")
}else if(cv >= cg){
    console.log("A greve vai parar.")
}
