const obj1 = {
    firstName:'Shounak',
    lastName:'Lohokare',
    age:'22'
}

// converts the object to string and stores it in local storage
const objToString = JSON.stringify(obj1);
localStorage.setItem('Shounak', objToString);     

// retrives the string from local storage and converts it to object 
const str = localStorage.getItem('Shounak');
const stringToObj = JSON.parse(str);
 
for(let key in stringToObj){
    console.log(key + " " + stringToObj[key]);
}