let btn = document.createElement("button");
btn.innerText = "Clickme!";
document.querySelector("body").append(btn);

btn.addEventListener("click",function(){
    getColor();
    console.log("button cicked");
});

function getColor(){
    btn.style.backgroundColor = "green";
}