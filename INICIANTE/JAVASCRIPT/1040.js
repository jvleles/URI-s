var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

var [N1, N2, N3, N4] = prompt("codigo e quantidade").split(" ").map(Number)
var media = (N1*2 + N2*3 + N3*4 + N4*1) / 10
var nota = parseFloat(prompt("nota exame"))
var media2 = (media + nota) / 2

if(media >= 7){
    console.log("Media: " +media.toFixed(1))
    console.log("Aluno aprovado.")
}
else if(media < 5){
    console.log("Media: " +media.toFixed(1))
    console.log("Aluno reprovado.")
}
else if(media > 5 && media < 6.9 || media == 5 || media == 6.9){
    console.log("Media: " +media.toFixed(1))
    console.log("Aluno em exame.")
    console.log("Nota do exame: " + nota.toFixed(1))
    if(media2 >= 5){
        console.log("Aluno aprovado.")
        console.log("Media final: " + media2.toFixed(1))
    }
    if(media2 < 5){
        console.log("Aluno reprovado.")
        console.log("Media final: " + media2.toFixed(1))
    }

}
