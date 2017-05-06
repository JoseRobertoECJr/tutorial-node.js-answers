function callback(err, fileData){
    if(err){
        return console.error(err);
    }
        num_of_new_lines = fileData.toString().split('\n').length - 1;
        console.log(num_of_new_lines);
}

function numOfNewLines(file){
    var fs = require('fs');
    fileContents = file[2];

    fs.readFile(fileContents, callback);
}

numOfNewLines(process.argv);
