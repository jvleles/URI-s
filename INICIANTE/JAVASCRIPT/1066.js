var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var pa = 0
var im = 0
var po = 0
var ne = 0

for(i=0;i<5;i++){
    var x = parseInt(prompt(""))
    if(x%2 === 0){
        pa = pa + 1
    }
    else if(x%2 != 0){
        im = im + 1
    }
    if(x > 0){
        po = po + 1
    }
    if(x < 0){
        ne = ne + 1
    }
}
console.log(pa + " valor(es) par(es)")
console.log(im + " valor(es) impar(es)")
console.log(po + " valor(es) positivo(s)")
console.log(ne + " valor(es) negativo(s)")
