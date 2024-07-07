let para1 = document.createElement('p');
para1.innerText="Hey I am red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h = document.createElement('h3');
h.innerText = "I am a blue h3!";
document.querySelector("body").append(h);

h.classList.add("blue");

let div = document.createElement("div");
document.querySelector("body").append(div);

let h1 = document.createElement("h1");
h1.innerText = "I am in div";
document.querySelector("div").append(h1);

let p = document.createElement("p");
p.innerText = "Me too";
document.querySelector("div").append(p);