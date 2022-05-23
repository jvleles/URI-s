var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); }

var [N, G] = (prompt(' ').split(' ').map(Number))
var lista = []

for(i=0;i<N;i++){
    var [l, x] = (prompt(' ').split(' '))
    lista.push(l)
    lista.push(parseInt(x))
}
var qtd = parseInt(prompt(""))
var listaUsadas = []

listaUsadas = prompt("").split(' ')

var poder = 0

for(i = 0; i < listaUsadas.length; i++){
    for(j=0;j < lista.length;j++){
        var runaAtual = lista[j]
        var runaUsadaAtual = listaUsadas[i]
        
        if(runaUsadaAtual == runaAtual){
            poder += lista[j + 1]
            break;
        }
    }
}

if (poder >= G) {
    console.log(poder);
    console.log("You shall pass!");
} else {
    console.log(poder);
    console.log("My precioooous")
}
