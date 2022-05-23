var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")
var y = ""
var k = ""

for(i = 0; i < x.length; i++){
    if(x[i] == "."){
        contador = i
        break
    }
}

for(i = i + 1; i < x.length; i++){
    y = y + x[i]
}

y = y + "."

for(i = 0; i < contador; i++){
    y = y + x[i] 
}

if(y[0] == 0){
    for(i = 1; i < y.length; i++){
        k = k + y[i]
    }
    console.log(k)
}else{
    console.log(y)
}
