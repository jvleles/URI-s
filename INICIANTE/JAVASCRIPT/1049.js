var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var a = prompt()
var b = prompt()
var c = prompt()

if(a == "vertebrado"){
    if(b == "ave"){
        if(c == "carnivoro"){
            console.log("aguia")
        }
        if(c == "onivoro"){
            console.log("pomba")
        }
    }
    if(b == "mamifero"){
        if(c == "onivoro"){
            console.log("homem")
        }
        if(c == "herbivoro"){
            console.log("vaca")
        }
    }
}
if(a == "invertebrado"){
    if(b == "inseto"){
        if(c == "hematofago"){
            console.log("pulga")
        }
        if(c == "herbivoro"){
            console.log("lagarta")
        }
    }
    if(b == "anelideo"){
        if(c == "hematofago"){
            console.log("sanguessuga")
        }
        if(c == "onivoro"){
            console.log("minhoca")
        }
    }
}
