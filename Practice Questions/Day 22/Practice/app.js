let inp = document.createElement("input");
document.querySelector("body").append(inp);

let btn = document.createElement("button");
btn.innerText = "Click me";

document.querySelector("body").append(btn);

inp.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

let h1 = document.createElement("h1");
h1.innerText= "DOM Practice";
document.querySelector("body").append(h1);

let para = document.createElement("p");
para.innerHTML = "Apna college <b>Detla</b> Practice";
document.querySelector("body").append(para);