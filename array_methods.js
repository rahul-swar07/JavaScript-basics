var myArray = [10, 20, "Hello", {}];

myArray.push(50);
console.log(myArray);

var value = myArray.pop();
console.log(value);
console.log(myArray);

var value2 = myArray.shift();
console.log(value2);
console.log(myArray);

myArray.unshift(500);
console.log(myArray);

var myArray2 = [10, 20, "Hello", {}];

var myFunction = function(i) {
    console.log("For an element " + i);
};

myArray.forEach(myFunction);