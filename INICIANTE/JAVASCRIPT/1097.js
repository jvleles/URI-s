var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var I = 1
var J = 7

for(i=0;i<5;i++){
    for(k = 0;k<3;k++){
        console.log("I=" + I + " J=" + J)
        J = J - 1
    }
    var J = J + 5
    I = I + 2
}
