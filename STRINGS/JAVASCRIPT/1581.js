var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = prompt("")

for(i = 0; i < N; i++){
    var n = prompt("")
    var [ing, idi] = [false, []]

    for(j = 0; j < n; j++){
        idi.push(prompt(""))
    }

    for(j = 0; j < idi.length - 1; j++){
        if(idi[j] != idi[j+1]){
            ing = true
        }
    }
    if(ing){
        console.log("ingles")
    }else{
        console.log(idi[0])
    }
}
