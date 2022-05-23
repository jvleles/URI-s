var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))

while(x !== 0 && y !== 0){
    if( (y-x) == 7 || (y-x) == 12 || (y-x) == 22 || (y-x) == 52 || (y-x) == 102 || (y-x) == 4 || (y-x) == 10 || (y-x) == 15 || (y-x) == 25 || (y-x) == 55 || (y-x) == 105 || (y-x) == 20 || (y-x) == 30 || (y-x) == 110 || (y-x) == 60 || (y-x) == 40 || (y-x) == 70 || (y-x) == 120 || (y-x) == 100 || (y-x) == 150 || (y-x) == 200){
        console.log("possible")
    }else{
        console.log("impossible")
    }
    
    [x, y] = (prompt(' ').split(' ').map(Number))
}
