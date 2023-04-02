var person = {
    "firstName" : "Rahul",
    "lastName" : "Swar",
    "getFullName" : function() {
        return person.firstName + " " + person.lastName;
    }
};

var fullName = person.getFullName();
console.log(fullName);

var person2 = person;
person = {};
var fullName2 = person2.getFullName();
console.log(fullName2);

var person3 = {
    "firstName" : "Rahul",
    "lastName" : "Swar",
    "getFullName" : function() {
        return this.firstName + " " + this.lastName;
    }
};

var fullName3 = person3.getFullName();
console.log(fullName3);


