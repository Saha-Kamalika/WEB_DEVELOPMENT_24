let mainTodo= document.querySelector(".todo-lists-elem");
let inputField = document.getElementById("inputField");

const getTodoList = () =>{
    return JSON.parse(localStorage.getItem("todo"));
}

let localTodo = getTodoList() || [];

const addDynElem = (curr) =>{
    const divElem = document.createElement('div');
    divElem.classList.add("main-todo-div");
    divElem.innerHTML =`<li>${curr}</li><button class="deleteBtn">Delete</button>`;
    mainTodo.append(divElem);
}
const addTodoList = (e) =>{
    e.preventDefault();
    const todoLisVal = inputField.value.trim();
    inputField.value="";
    if(!localTodo.includes(todoLisVal)){
    localTodo.push(todoLisVal);
    localTodo = [...new Set(localTodo)];
    console.log(localTodo);
    localStorage.setItem("todo",JSON.stringify(localTodo));

    addTodoList(todoLisVal);
    }
};
const showTodo = () =>{
    console.log(localTodo);
    localTodo.forEach((curr) => {
        addDynElem(curr);
    });
}
showTodo();
document.querySelector("#addbtn").addEventListener('click',(e)=>{
    addTodoList(e);
})