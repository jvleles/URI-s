var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var f = prompt("")
new String(f)

for(i = 0; i < f.length; i++){

}

if(i <= 80){
    console.log("YES")
}
else if(i > 80){
    console.log("NO")
}
