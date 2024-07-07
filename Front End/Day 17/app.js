let   favMovie = "avatar";

let guess = prompt("Enter the movie name");

while(guess !== favMovie){
    if(guess == 'quit'){
        console.log("quit");
        break;
    }
    // console.log("Wrong!!!")
    guess= prompt("Guess again");

    if(guess == favMovie){
        console.log("Congrats!");
    }
}