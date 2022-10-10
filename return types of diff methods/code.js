const byClass = document.getElementsByClassName('ordered-class');
console.log(byClass);           // returns HTMLCollection
console.log(typeof byClass);

const querySelectorClassAll = document.querySelectorAll('.ordered-class');
console.log(querySelectorClassAll);  // returns NodeList
console.log(typeof querySelectorClassAll);

const byId = document.getElementById('troy');
console.log(byId);                // retuns Element
console.log(typeof byId);

const querySelectorId = document.querySelector('#troy');
console.log(querySelectorId);    // returns Element
console.log(typeof querySelectorId);

const querySelectorClass = document.querySelector('.ordered-class');
console.log(querySelectorClass);  // returns Element
console.log(typeof querySelectorClass);

