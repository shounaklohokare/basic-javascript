let promise = new Promise((resolve, reject) => {

    let x = 0;

    if(x==0){
        resolve("X is 0");
    }else{
        reject("X is not 0");
    }

});

promise.then((message) => {
    console.log(message);
}).catch((error) =>{
    console.log(error);
})