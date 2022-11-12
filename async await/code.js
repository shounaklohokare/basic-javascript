function makeRequest(name){
    return new Promise((resolve, reject) => {
        console.log('Making an access request');

        if(name === 'Shounak'){
            resolve('Access granted');
        }else{
            reject('Access denied');
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Access Status :- ${response}!`);
    })
}

async function manageRequest(){
    const accessStatus = await makeRequest('Shounak');
    console.log('Access response received');
    const requestStatus = await processRequest(accessStatus);
    console.log(requestStatus);
}

manageRequest();