const todo_list = document.getElementById("troy");
const items = document.getElementById("troy").children;
const head = document.getElementById("head");

const button = document.getElementById("btn");

button.addEventListener('click', function(){
    
    const newElement = document.createElement("li");
    newElement.innerText = `Item ${items.length + 1}`;
    newElement.addEventListener('click', deleteItem);
    todo_list.appendChild(newElement);

    head.innerText = `Number of items:- ${items.length}`;
});


function deleteItem(e){
    e.stopPropagation();                  // prevents event bubbling
    console.log(e.target.remove());
}

todo_list.addEventListener('click', function(){
    todo_list.classList.toggle('fade');
})