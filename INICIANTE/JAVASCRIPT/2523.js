var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var l = ""

while(true){
    var x = prompt("")
    if(x === ""){
        break
    }
    var n = parseInt(prompt(""))
    var k = prompt("").split(" ").map(Number)
    
    for(i = 0; i < n; i++){
        l = l + x[k[i] - 1]
    }
    console.log(l)
    l = ""
}
