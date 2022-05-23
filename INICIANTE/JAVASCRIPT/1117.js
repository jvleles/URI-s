var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

for(nv = 0;nv != 1;){
    var x = parseFloat(prompt(""))
    if(x >= 0 && x <= 10){
        nv = nv + 1
    }
    else{
        console.log("nota invalida")
    }
 }
 for(nv = 0;nv != 1;){
     var y = parseFloat(prompt(""))
    if(y >= 0 && y <= 10){
        nv = nv + 1
    }
    else{
        console.log("nota invalida")
    }
 }
 var media = (x + y) / 2
 console.log("media = " + media.toFixed(2))
