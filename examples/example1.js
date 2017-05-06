function addOne(num){
    num++;
}

function printNumPlusOne(num){

    setTimeout(addOne, 500, num);

    console.log(num);
}

printNumPlusOne(1);
