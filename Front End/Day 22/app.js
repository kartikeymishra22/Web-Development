let para1 = document.createElement('p');
para1.innerText = "Hey I am red";
document.body.appendChild(para1);

para1.classList.add("red");

let h2 = document.createElement('h3');
h2.innerText = "I am a blue h3!";
document.body.appendChild(h2);

h2.classList.add("blue");

let div = document.createElement('div');
let h = document.createElement('h1');
let para2 = document.createElement('p');

h.innerText ="I am in a div";
para2.innerText = "me too!";

div.append(h);
div.append(para2);

div.classList.add("box");
document.body.appendChild(div);
