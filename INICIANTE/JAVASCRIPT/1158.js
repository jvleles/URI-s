var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = parseInt(prompt(""))
var soma = 0
var k = 0
var j = 1

for(i=0;i<n;i++){
    var [x, y] = prompt("").split(" ").map(Number);
    if(x%2==1){
        for(var K=0;K<y;K++) {
			soma = soma + x + k
			k+=2
		}
    }
    else if(x%2==0){
        for(var J=0;J<y;J++){
            soma = soma + x + j
            j+=2
        }
    }
    console.log(soma)
	soma = 0
	k = 0
	j = 1
}
