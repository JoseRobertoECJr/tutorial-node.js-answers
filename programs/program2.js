function sum1(array){
    var total = 0;
    var arrayLength = array.length;
    for(var i = 2; i < arrayLength; i++){
        total += +array[i];
    }
    console.log(total);
}

function sum2(array){
    var total = 0;
    var arrayLength = array.length;
    for(var i = 2; i < arrayLength; i++){
        total += Number(array[i]);
    }
    console.log("im sum2: " + total);
}

sum1(process.argv);
