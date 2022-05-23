var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var x = prompt("")
var y = prompt("")

for(i = 0; i < x.length; i++){
}
for(k = 0; k < y.length; k++){
}

if(i >= k){
    console.log("go")
}else{
    console.log("no")
}
