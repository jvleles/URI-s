var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")

for(i=1;i<=n;i++){
    if(n%i==0){
        console.log(i)
    }
}
