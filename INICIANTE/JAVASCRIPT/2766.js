var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

for(i = 0; i < 10; i++){
    var x = prompt("")

    if(i == 2 || i == 6 || i == 8){
        console.log(x)
    }
}
