var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var R = parseInt(prompt(""));
var pontosA = 0;
var pontosB = 0;
var aux = 1;

while(R !== 0){
for(i = 0; i < R; i++){
    let [A,B] = prompt("").split(" ").map(Number);
    if(A >= 0 && B<= 10){
     if(A == B){
        pontosA = pontosA + 0;
        pontosB = pontosB + 0;
    } else if(A > B){
        pontosA = pontosA + 1;
    } else if(B > A){
        pontosB = pontosB + 1;
    }
} else{
    [A,B] = prompt("").split(" ").map(Number);
}
}

    console.log(pontosA + " " + pontosB);

    R = parseInt(prompt(""));
    pontosA = 0;
    pontosB = 0;
}
