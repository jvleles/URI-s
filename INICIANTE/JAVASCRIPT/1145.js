var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var [x, y] = (prompt(' ').split(' ').map(Number))
var z = 0
var s = ""

for(i=1;i<=y;i++){
    s = s + i
    z++
    
    if(z == x){
        console.log(s)
        z = 0
        s = ""
    }else{
        s = s + " "
    }
}
