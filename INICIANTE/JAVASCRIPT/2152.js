var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var N = parseInt(prompt(""))

for(i = 0; i < N; i++){
    var [x, y, z] = prompt("").split(" ").map(Number)
    if(z == 1){
        if(x > 9){
            if(y > 9){
                console.log(x + ":" + y + " - A porta abriu!")
            }
            else if(y < 10){
                console.log(x + ":0" + y + " - A porta abriu!")
            }
        }
        else if(x < 10){
            if(y > 9){
                console.log("0" + x + ":" + y + " - A porta abriu!")
            }
            else if(y < 10){
                console.log("0" + x + ":0" + y + " - A porta abriu!")
            }
        }
    }
    else if(z == 0){
                if(x > 9){
            if(y > 9){
                console.log(x + ":" + y + " - A porta fechou!")
            }
            else if(y < 10){
                console.log(x + ":0" + y + " - A porta fechou!")
            }
        }
        else if(x < 10){
            if(y > 9){
                console.log("0" + x + ":" + y + " - A porta fechou!")
            }
            else if(y < 10){
                console.log("0" + x + ":0" + y + " - A porta fechou!")
            }
        }
    }
}
