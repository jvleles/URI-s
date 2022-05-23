var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))
var vgd
var vgg

for(i = 0; i < N; i++){
    var bonus = parseInt(prompt(""))
    var [x, y, z] = (prompt(' ').split(' ').map(Number))
    var [a, b, c] = (prompt(' ').split(' ').map(Number))
    
    vgd = (x + y)/2
    if(z % 2 == 0){
        vgd = vgd + bonus
    }
    vgg = (a + b)/2
    if(c % 2 == 0){
        vgg = vgg + bonus
    }
    
    if(vgd > vgg){
        console.log("Dabriel")
    }
    else if(vgg > vgd){
        console.log("Guarte")
    }
    else if(vgd == vgg){
        console.log("Empate")
    }
}
