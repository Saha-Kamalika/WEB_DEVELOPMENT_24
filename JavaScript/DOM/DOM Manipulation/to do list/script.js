let btn=document.querySelector(".btn");
let inputField = document.querySelector("#inputField");
let para = document.querySelector(".para")

const addTodo = ()=>{
    let myPara = document.createElement('p');
    myPara.innerText = inputField.value;
    para.append(myPara);
    inputField.value="";
}
btn.addEventListener('click',()=>{
    addTodo();
})

para.addEventListener('click',(event)=>{
    console.log(event.target);
    let curr= event.target;
    curr.remove();
})