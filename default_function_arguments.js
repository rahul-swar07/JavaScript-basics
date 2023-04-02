function add (a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(10, 30));

function add2 () {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add2(10, 30, 40, 50, 60, 70));