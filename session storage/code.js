// session storage is temporaray, it is cleared when the page session ends i.e
// when the tab or browser is closed

sessionStorage.setItem('key1', 'value1');
sessionStorage.setItem('key2', 'value2');

const value = sessionStorage.getItem('key1');
console.log(value);


sessionStorage.removeItem('key1');

// sessionStorage.clear();

