// we can call function before its declaration because of hoisting
sayHello();


function sayHello(){

    const ele = document.getElementById("abc");
    ele.innerHTML = "<strong>Hello</strong>"

}