var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var N = prompt("Quantidade de valores")

for(var i = 0; i < N; i++)	{
    var x = parseInt(prompt(""))
    
    if(x % 2 == 0 && x > 0){
        console.log("EVEN POSITIVE")
    }
    else if(x % 2 == 0 && x < 0){
        console.log("EVEN NEGATIVE")
    }
    else if(x % 2 != 0 && x > 0){
        console.log("ODD POSITIVE")
    }
    else if(x % 2 != 0 && x < 0){
        console.log("ODD NEGATIVE")
    }
    else{
        console.log("NULL")
    }
}
