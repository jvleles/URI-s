var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var n = prompt("")
var a = 0
var e = 0
var h = 0
var m = 0
var x = 0

for(i=0;i<n;i++){
    var [X, l] = (prompt(' ').split(' '))
    if(l == "A"){
        a = a + 1
    }
    else if(l == "E"){
        e = e + 1
    }
    else if(l == "H"){
        h = h + 1
    }
    else if(l == "M"){  
        m = m + 1
    }
    else if(l == "X"){
        x = x + 1
    }
}
console.log(x + " Hobbit(s)")
console.log(h + " Humano(s)")
console.log(e + " Elfo(s)")
console.log(a + " Anao(s)")
console.log(m + " Mago(s)")
