var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var x = prompt("")

while(x != 2002)	{
    console.log("Senha Invalida")
    x = prompt("")
}

if(x == 2002){
    console.log("Acesso Permitido")
}
