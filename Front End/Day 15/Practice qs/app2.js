// let name = prompt("Enter the name");

// let age  = prompt("Enter the age");

// alert(`${name} is ${age} years old`);

// let quarter = parseInt(prompt("Enter the quarter number"));

// switch(quarter){
//     case 1:
//         console.log("January", "febuary", "March");
//         break;
    
//     case 2:
//         console.log("April", "May", "June");
//         break;
    
//     case 3:
//         console.log("July", "August", "September");
//         break;
    
//     case 4:
//         console.log("October", "November", "December");
//         break;

//     default:
//         console.log("Invalid quarter");

// }


// let str = prompt("Enetr a string");

// if((str[0]=== 'A' || str[0] === 'a')&& str.length >3){
//     console.log("Golden String");
// }

// else{
//     console.log("Not a golden string");
// }

// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(prompt("Enter a number"));
// let c = parseInt(prompt("Enter a number"));

// if(a>b){
//     if(a>c){
//         console.log(` ${a} is largest number`);
//     }
//     else{
//         console.log(`${c} is largest number`);
//     }
// }
// else{
//     if(b>c){
//         console.log(`${b} is largest number`);
//     }
//     else{
//         console.log( `${c} is largest number`);
//     }
// }

// let msg = "   help!   ";

// console.log(msg.trim().toUpperCase());

let start = ["january", "july", "march", "august"];

start.shift();
start.shift()
start.unshift("july","june");

console.log(start);
