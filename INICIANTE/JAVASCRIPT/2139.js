var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var lista = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 25]

while(true){
      
    k = prompt("")
    if(k === undefined){
        break
    }else{
        var [x, y] = k.split(" ").map(Number)
    }
  
    if(x == 12 && y == 25){
        console.log("E natal!")
    }
    else if(x == 12 && y == 24){
        console.log("E vespera de natal!")
    }
    else if(x == 12 & y > 25){
        console.log("Ja passou!")
    }else{
        var dias = lista[x-1] - y
        for(i = x; i < 12; i++){
            dias += lista[i]
        }
        if(isNaN(dias)){
            break
        }else{
            console.log("Faltam " + dias + " dias para o natal!")
        }
    }
}
