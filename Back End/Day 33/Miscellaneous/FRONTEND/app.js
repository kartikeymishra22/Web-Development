// function PersonMaker(name , age){
//     const Person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi , my name is ${name}`);
//         },
//     };
//     return Person;
// }

class Student {
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

const student1 = new Student("Kartik", 21, 90);
