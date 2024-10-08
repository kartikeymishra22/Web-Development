// let favourite = "Avatar";

// let guess = prompt("Enetr your guess");

// while((guess != favourite) && (guess != "quit")){
//     console.log("Guess again");
//     guess = prompt("Enter your guess");
//     if(guess == favourite){
//         console.log("Congrats!")
//     }
//     else{
//         console.log("quit");
//     }
// }

// let i = 1;

// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let arr = ["Kartikey","Rajat","Jatin","Atul"];

// for(let i =0; i<arr.length; i++){
//     console.log(i, arr[i]);
// }

// let arr = [["Kartikey","Rajat","Jatin","Atul"], [1,2,3,4],[5,6,7,8]];

// // for(let i =0; i<arr.length; i++){
// //     console.log(`List ${i}`);
// //    for(let j =0; j<arr[i].length; j++){
// //     console.log(arr[i][j]);
// //    }
// // }

// for(arrays of arr){
//     for(list of arrays){
//         console.log(list);
//     }
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num ){
//         arr.splice(i,1);
//         i--;
//     }
// }
// console.log(arr);

// let number = 287152;

// let count = 0;

// while(number%10 != 0){
//     count = count + 1;
//     number = Math.floor(number/10);
// }

// console.log(count);

// let number = 287152;

// let sum = 0;

// let copy = number;

// while(copy>0){
//     digit = copy%10;
//     sum = sum + digit;
//     copy = Math.floor(copy/10)
// }

// console.log(sum);

// let number = 7;

// let fact = 1;

// for(let i = 1; i<=number; i++){
//     fact = fact * i;
// }

// console.log(fact);

let arr = [12,22,3,32,66,78,55,33];

let largest = 0;

for(let i =0; i<arr.length; i++){
    if (arr[i]> largest){
        largest = arr[i];
    }
}

console.log(largest);
