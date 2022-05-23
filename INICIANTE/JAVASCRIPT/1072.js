var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }

var n = prompt("")
var ctgin = 0

for(i=0;i<n;i++){
    var x = prompt("")
    if(x >=10 && x<=20){
        ctgin = ctgin + 1
    }
}
var ctgout = n - ctgin
console.log(ctgin + " in")
console.log(ctgout + " out")
