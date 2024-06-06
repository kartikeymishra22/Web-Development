// let arr = [1,2,3,4,2,5,6,7];
// let num = 2;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// let num = 287152;

// let count = 0;

// let copy = num;

// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);
// 

// let num = Math.floor(Math.random() * 6) + 1;
// console.log(num);

// const max = prompt("Enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("enter the guess");

// while(true){
//     if(guess == "quit"){
//         console.log("quitting game");
//         break;
//     }

//     if(guess == random){
//         console.log("You are right! congrats");
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("your guess was to small please try again");
//     }
//     else{
//         guess = prompt("your guess is to large please try again"); 
//     }
// }

let arr = [1,2,3,4,5];

// let ans = arr.map((arr)=>{
//     return arr*arr;
// });

// let sum = ans.reduce((acc,curr)=> acc + curr, 0
// );

// let avg = sum / arr.length;

console.log(arr.map((arr)=> arr*5));