// let arr = [1,2,3,4,5];

// // function print(el){
// //     console.log(el);
// // }

// // arr.forEach(print);

// arr.forEach( (el) => {
//     console.log(el);
// });

let arr = [ {
    name : "Kartikey",
    marks : 94
}, {
    name : "Rajat",
    marks : 93
}, {
    name : "Atul",
    marks : 80
}];

arr.forEach((student) =>{
    console.log(student.marks);
});