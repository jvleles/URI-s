var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var I = 0
var J = 1

for (i = 0; i < 11; i++) {
    for (k = 0; k < 3; k++) {
        if (I == 0 || I == 1.0 || i == 10) {
        console.log("I=" + Math.ceil(I) + " J=" + parseInt(J))
        J = J + 1
    }else {
        console.log("I=" + I.toFixed(1) + " J=" + J.toFixed(1))
        J = J + 1
    }
}
    var J = J - 3 + 0.2
    I = I + 0.2
}
