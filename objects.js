var myObj = {};
console.log(myObj);

myObj.prop = "Hello";
console.log(myObj);

myObj.prop2 = 123;
console.log(myObj);

console.log("The number property is " + myObj.prop2);

var myObj2 = {
    "prop" : "Hello",
    "prop2" : 123,
    "prop3" : true
};
console.log(myObj2);

console.log("Accessing property of myObj2 that doesn\'t exist gives " + myObj2.prop4);