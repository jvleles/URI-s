var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var t = prompt("")
new String(t)

for(i = 0; i < t.length; i++){

}

if(i <= 140){
    console.log("TWEET")
}
else if(i > 140){
    console.log("MUTE")
}
