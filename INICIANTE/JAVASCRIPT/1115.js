var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [x, y] = prompt("").split(" ").map(Number);

while(x != 0 && y != 0 ){
    if(x > 0 && y > 0){
        console.log("primeiro")
    }
    else if(x > 0 && y < 0){
        console.log("quarto")
    }
    else if(x < 0 && y > 0){
        console.log("segundo")
    }
    else if(x < 0 && y < 0){
        console.log("terceiro")
    }

    [x, y] = prompt("").split(" ").map(Number);
}
