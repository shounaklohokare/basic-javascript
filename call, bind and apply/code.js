const person = {
    fName : "Shounak",
    lName : "Lohokare",
    age : 22
}

function getFullName(){
    console.log(this.fName + " " + this.lName);
}

getFullName.call(person); // call is used to invoke a function using an object

////////////////////////////////////////////////////////////////////////////////

function getAge(){
    console.log(this.age);
}

const displayAge = getAge.bind(person); // bind is used to associate a function with an object

displayAge();


////////////////////////////////////////////////////////////////////////////////

function getDetails(){
    console.log(this.fName + " " + this.lName + " " + this.age);
}

getDetails.apply(person); // apply is the same as call, with the difference that if we want to pass paramters we need to pass it as an array
