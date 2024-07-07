let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you do");
    }
    console.dir(btn);
}

function sayHello(){
    console.log("buttton was clicked");
};