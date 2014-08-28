/**
 * Created by gomezgarciad on 28/08/2014.
 */

var fs = require("fs");
var comparator = require("./comparator");
var a, b;


if (process.argv[2] != undefined && process.argv[3] != undefined) {
    a = JSON.parse(fs.readFileSync(process.argv[2]));
    b = JSON.parse(fs.readFileSync(process.argv[3]));
}
comparator.traverse(a, b);
view(a,b);

function view(a, b) {
    console.log("\n\n\n");
    console.log("a contains:\n===========");
    console.log(JSON.stringify(a));
    console.log("b contains:\n===========");
    console.log(JSON.stringify(b));
}



