function change(){
    const elements = document.getElementById("troy");
    
    const newElement = document.createElement("li");
    newElement.innerHTML = "<strong>I am the new element<strong>";

    elements.appendChild(newElement);
}