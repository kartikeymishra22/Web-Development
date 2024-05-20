// let color = "red";

// // Traffic ligths

// if(color === "red"){
//     console.log("Stop!");
// }
// if(color === "yellow"){
//     console.log("Slow Down");
// }
// if(color === "green"){
//     console.log("Go");
// }

// let size = "S";

// if(size === "XL"){
//     console.log("Price is Rs.250");
// }
// else if(size === "L"){
//     console.log("Price is Rs.200");
// }
// else if(size === "M"){
//     console.log("Price is Rs.100");
// }
// else{
//     console.log("Price is Rs.50");
// }


let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i = 0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);


let number = "287152";

let count = 0;

for(let i= 0; i<number.length; i++){
    count++;
}
console.log(count);