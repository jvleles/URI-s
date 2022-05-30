var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("");
var [p, r] = x.split(" ").map(Number);

if(p == 0){
    console.log("C");
}else{
    if(r == 0){
        console.log("B")
    }else{
        console.log("A")
    }
}
