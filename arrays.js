var myArray = [100, 200, 300];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

var myArray2 = ["Hello", "World", "JS"];

console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);

myArray2[3] = "Rahul Swar";
console.log(myArray2[3]);

console.log(myArray2.length);

myArray2[4] = "foo";
console.log(myArray2.length);

var myArray3 = myArray2;
console.log(myArray3[4]);
console.log(myArray3["4"]);

myArray3[400] = "poo";
console.log(myArray3);

console.log(myArray3.length);

myArray3["foo"] = "fooBar";
console.log(myArray3);
console.log(myArray3.length);

