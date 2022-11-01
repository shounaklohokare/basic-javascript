console.log("On global scope");
console.log(this); // points to global object Window

function consoleThis(){
    console.log("Inside consoleThis");
    console.log(this); // points to global object Window
}

consoleThis();
const person = {
    name : "Shounak",
    sayThis(){ 
        console.log("Inside person sayThis");
         console.log(this); // points to the person object
    }
}

person.sayThis();

function strictThis(){
    "use strict";
    console.log("Inside strict sayThis");
    console.log(this);  // points to undefined
}

strictThis();


const lis = document.querySelectorAll('li');

// this keyword in an event will point to the element that received the event
lis.forEach(li =>
    { 
        li.addEventListener('click', function() { 
            console.log("Inside event");
            console.log(this);
         })
    }
) 