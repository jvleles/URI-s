var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")
var saiu = 0

for(i = 0; i < x.length; i++){
    if(x[i] == "1"){
        if(x[i + 1] == "3"){
            console.log(x + " es de Mala Suerte")
            saiu = 1
            break
        }
    }
}

if(saiu == 0){
    console.log(x + " NO es de Mala Suerte")
}
