function numOfNewLines2(file){
    var fs = require('fs');
    var buf = fs.readFileSync(file);
    var str = buf.toString();
    var array = str.split('\n');
    var len = array.length;
    var num_of_new_lines = len - 1;

    console.log(num_of_new_lines);
}

function numOfNewLines(file){
    num_of_new_lines = require('fs').readFileSync(file).toString().split('\n').length - 1;
    console.log(num_of_new_lines);

}

numOfNewLines(process.argv[2]);
