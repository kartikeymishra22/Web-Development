let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Button clicked");
    getcolor();
});

function getcolor(){
    btn.style.backgroundColor = "green";
}