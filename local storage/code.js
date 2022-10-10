// local storage persists even after the page session ends.

localStorage.setItem('key example1', 'value example1');
localStorage.setItem('key example2', 'value example2');

const value = localStorage.getItem('key example1');
console.log(value);

localStorage.removeItem('key example1');

// localStorage.clear();

