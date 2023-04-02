function sayHello() {
    console.log("Hello");
}

function sayHelloName(name) {
    console.log("Hello " + name);
}

sayHello();
sayHelloName("Rahul Swar");

function nameAndTimeOfDay(name, timeOfDay) {
    console.log("Hello " + name + "! Time of Day is " + timeOfDay);
}

nameAndTimeOfDay("Rahul Swar", "Night");
nameAndTimeOfDay("Rahul Swar");

function nameAndTimeOfDay2(name, timeOfDay) {
    return "Hello " + name + "! Time of Day is " + timeOfDay;
}

var stringName = nameAndTimeOfDay2("Rahul Swar", "Night");
console.log(stringName);

function nameAndTimeOfDay3(name, timeOfDay) {
    return;
}

var stringName2 = nameAndTimeOfDay3("Rahul Swar", "Night");
console.log(stringName2);

var a = "Hello";

var f = function foo() {
    console.log("Hello");
};

f();

var b = function () {
    console.log("Hello");
};

b();

var ff = function() {
    console.log("Hello");
}

var executor = function(fn) {
    fn();
}

executor(ff);

var fff = function(name) {
    console.log("Hello " + name);
}

var executor2 = function(fn, name) {
    fn(name);
}

executor2(fff, "Rahul Swar");

var myObj = {
    "testProp" : true
};

myObj.myMethod = function() {
    console.log("Function on objet");
};

myObj.myMethod();