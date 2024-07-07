let todo = [];

let req = prompt("enter the req");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("----------")
        for(let i = 0; i<todo.length; i++){
            console.log(task, todo[task]);
        }
        console.log("----------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("Enter the task idx");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("wrong task");
    }
    req = prompt("enter the req");
}