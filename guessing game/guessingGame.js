
function guessGame(){

    let num = Math.floor(Math.random() * 11);

    while(true){
    
        let guess = prompt("Guess a numbeer: ");

        if(guess == num){
            alert("You guessed it rightt!!");
            break;
        }else if(guess < num){
            alert("The target is a bit higher");
        }else{
            alert("The target is a bit lower")
        }

    }

}
console.log("wtf");
guessGame();