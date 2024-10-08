// let color = "Yellow";

// if(color === "Red"){
//     console.log("Color is Red");
// }

// if(color === "Yellow"){
//     console.log("Color is Yellow");
// }

// if(color === "Green"){
//     console.log("Color is Green");
// }

// 

// let str = "Kartikey";

// if((str[0] === 'K') && (str.length >3)){
//     console.log("it is a good string");
// }

// else {
//     console.log("It is a not a good string");
// }

let day = parseInt(prompt("Please enter your day"));

switch(day){
    case 1: 
        console.log('Monday');
        break;

    case 2: 
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;
    
    case 5:
        console.log('Friday');
        break;
    
    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default :
        console.log("Please enter a valid day");
}