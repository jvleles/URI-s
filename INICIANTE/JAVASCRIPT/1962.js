var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var ano

for(i = 0; i < N; i++){
    var x = parseInt(prompt(""))
    if(x < 2015){
        ano = 2015 - x
        console.log(ano + " D.C.")
    }
    else if(x == 2015){
        console.log("1 A.C.")
    }
    else if(x > 2015){
        ano = x - 2014
        console.log(ano + " A.C.")
    }
}
