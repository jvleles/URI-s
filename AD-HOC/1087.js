var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

while(true){
    var [x1, y1, x2, y2] = prompt("").split(" ").map(Number)
    
    if(x1 == y1 && x1 == x2 && x1 == y2 && x1 == 0){
        break
    }
    if(x1 == x2 && y1 == y2){
        console.log(0)
    }
    else if(Math.abs(x1 - x2) == Math.abs(y1 - y2) || x1 == x2 || y1 == y2){
        console.log(1)
    }
    else{
        console.log(2)
    }
}
