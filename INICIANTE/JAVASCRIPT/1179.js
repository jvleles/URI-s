var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var par = []
var cp = 0
var impar = []
var ci = 0

for(i = 0; i < 15; i++){
    var x = prompt("")
    if(x % 2 == 0){
        par[cp] = x
        cp++
    }else{
        impar[ci] = x
		ci++
    }
    
    if(cp == 5){
        var cp = 0
        for(j = 0; j < 5; j++){
            console.log("par[" + j + "] = " + par[j])
        }
    }
    if(ci == 5){
        var ci = 0
        for(k = 0; k < 5; k++){
            console.log("impar[" + k + "] = " + impar[k])
        }
    }
}

for(g = 0; g < ci; g++){
    console.log("impar[" + g + "] = " + impar[g])
}

for(l = 0; l < cp; l++){
    console.log("par[" + l + "] = " + par[l])
}
