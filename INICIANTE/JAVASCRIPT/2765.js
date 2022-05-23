var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")
var y = ""

for(i = 0; i < x.length; i++){
    if(x[i] == ","){
        break
    }
    y = y + x[i]
}

console.log(y)

y = ""

for(i = i + 1; i < x.length; i++){
    y = y + x[i]
}

console.log(y)
