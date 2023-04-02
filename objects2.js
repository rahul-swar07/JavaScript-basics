console.log("Accessing myObj2 object properties using Square Bracket [] notation " + myObj2["prop"] + " " + myObj2["prop2"] + " " + myObj2["prop3"]);

var myObj3 = {
    "1" : "one"
};

console.log(myObj3["1"]);

var myObj4 = {
    "prop" : "Hello",
    "prop2" : 123,
    "prop3" : true
}

var proprtyName = "prop";

console.log(myObj4[proprtyName]);

var myObj5 = {
    "prop" : "Hello",
    "prop2" : 123,
    "prop3" : true,
    "objProp" : {
        "innerProp" : "Inner Property"
    }
};

console.log(myObj5.objProp);
console.log(myObj5.objProp.innerProp);

myObj5.objProp.newInner = "New Inner Property";

console.log(myObj5.objProp);
console.log(myObj5["objProp"]["newInner"]);

var myObj6 = {
    "myProp" : "Hello"
};

var myObj7;
myObj7 = myObj6;

console.log(myObj7.myProp);

if(myObj7 === myObj6){
    console.log("Object variables are equal");
}
else{
    console.log("Object variables are notequal");
}

var person = {
    "firstName" : "Rahul",
    "middleName" : null,
    "lastName" : "Swar"
};

console.log(person.age);
console.log(person.middleName);

person.age = 22;

console.log(person);

person.age = undefined;

console.log(person);

delete person.age;

console.log(person.age);

console.log(person);