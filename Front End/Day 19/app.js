// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num= 5;

// function getElements(arr, num){
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i] > num) {
//             console.log(arr[i]);
//     }
// }

// }

// getElements(arr, num);


// let str = "abcdabcdefgggh";

// function getUnique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             ans = ans + currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));

// let country = ["Australia", "Germany", "United States of America"];

// function longest(country){
//     let longest = "";
//     for(let i = 0; i<country.length; i++){
//         if(country[i].length > longest.length){
//             longest = country[i];
//         }
//     }
//     return longest;
// }

// console.log(longest(country));

let str = "abcdefgh";

function vowels(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
       if( str.charAt(i) == "a" || 
        str.charAt(i) == "e" || 
        str.charAt(i) == "i" || 
        str.charAt(i) == "o" || 
        str.charAt(i) == "u" 
        ){
            count++;
        }
    }
    return count;
}

console.log(vowels(str));