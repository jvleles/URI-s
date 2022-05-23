var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var flag = 1

while(flag == 1){
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
     var media = (x + y)/2
     console.log("media = " + media.toFixed(2))
     console.log("novo calculo (1-sim 2-nao)")
     flag = prompt("1 ou 2")
     while (flag != 1 && flag != 2) {
        console.log("novo calculo (1-sim 2-nao)")
        flag = prompt("1 ou 2")
    }
}
