var person = {
    "firstName" : "Rahul",
    "lastName" : "Swar",
    "getFullName" : function() {
        return this.firstName + " " + this.lastName;
    },
    "address" : {
        "street" : "Swami Chinmayananda Marg",
        "city" : "Margao",
        "state" : "Goa",
        "country" : "India"
    },
    "isFromState" : function(state) {
        return state === this.address.state;
    }
};

if(person.isFromState("Goa")){
    console.log("Correct State");
}
else{
    console.log("Wrong State");
}


