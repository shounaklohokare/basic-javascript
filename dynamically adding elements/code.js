const todo_list = document.getElementById("troy");
const list = document.getElementById("troy").children;
const head = document.getElementById("head");

const button = document.getElementById("btn");

button.addEventListener('click', function(){
    
    const newElement = document.createElement("li");
    newElement.innerText = `Item ${list.length + 1}`;

    todo_list.appendChild(newElement);

    head.innerText = `Number of items:- ${list.length}`;
});