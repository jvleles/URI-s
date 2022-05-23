var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

lista = []
var aux

while(true){
    var N = parseInt(prompt(""))
    if(isNaN(N)){
        break
    }
    for(i = 0; i < N; i++){
        lista[i] = parseInt(prompt(""))
    }
    for(j = 0; j < lista.length - 1; j++){
        for(k = 0; k < (lista.length - j - 1); k++){
            if(lista[k] > lista[k+1]){
                aux = lista[k]
                lista[k] = lista[k + 1]
                lista[k + 1] = aux
            }
        }
    }
    for(l = 0; l < N; l++){
        if(lista[l] > 9 && lista[l] < 100){
            console.log("00" + lista[l])
        }
        else if(lista[l] > 0 && lista[l] < 10){
            console.log("000" + lista[l])
        }
        else if(lista[l] > 99 && lista[l] < 1000){
            console.log("0" + lista[l])
        }
        else if(lista[l] === 0){
            console.log("0000")
        }else{
            console.log(lista[l])
        }
    }
    lista = []
}
