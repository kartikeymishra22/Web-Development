let h = document.querySelector("h1");

// setTimeout(()=>{
//     h.style.color = "red";
// },1000);


// setTimeout(()=>{
//     h.style.color = "orange";
// },2000);


// setTimeout(()=>{
//     h.style.color = "green";
// },3000);

function changeColor(color, delay, nextColorChange){
    setTimeout(() =>{
        h.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000, () => {
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000, ()=>{
            changeColor("yellow",1000);
        });
    });
});
