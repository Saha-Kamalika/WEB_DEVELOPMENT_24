let btn = document.querySelector("#btn");
let rect = document.querySelector(".rectangle");


const addTransition1 = ()=>{
    rect.classList.add("addTransition1");
}
const addTransition2 = ()=>{
    rect.classList.add("addTransition2");
}
const addTransition3 = ()=>{
    rect.classList.add("addTransition3");
}
const addTransition4 = ()=>{
    rect.classList.add("addTransition4");
}
btn.addEventListener('click', addTransition1);
rect.addEventListener('mouseover', addTransition2);
rect.addEventListener('mousedown',addTransition3);
rect.addEventListener('dblclick',addTransition4);