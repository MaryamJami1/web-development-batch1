let haider = document.getElementById("haider")
console.log(haider);


haider.textContent = "Bye Dom!"



// dom manipulation
let para = document.createElement("p")
console.log(para);

para.style.color = "red"
para.textContent = "Haider pagal hai!"


document.body.appendChild(para)
para.textContent = "Haider ko bahir phenko!"



let prnt = document.querySelectorAll("h1")
console.log(prnt);

console.log(prnt[2].parentElement);





let body = document.querySelector("body")
console.log(body.children);


// javascript behaviour
// syncronous   Asychronous
