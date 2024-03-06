let mainTodo= document.querySelector(".todo-lists-elem");
let inputField = document.getElementById("inputField");

const getTodoList = () =>{
    return JSON.parse(localStorage.getItem("todo"));
}

const addTodoListLocal = (localTodo)=>{
    return localStorage.setItem("todo",JSON.stringify(localTodo));
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
    if(todoLisVal!="" && !localTodo.includes(todoLisVal)){
    localTodo.push(todoLisVal);
    localTodo = [...new Set(localTodo)];
    console.log(localTodo);
    localStorage.setItem("todo",JSON.stringify(localTodo));

    addDynElem(todoLisVal);
    }
};
const showTodo = () =>{
    console.log(localTodo);
    localTodo.forEach((curr) => {
        addDynElem(curr);
    });
}
showTodo();
const removeTodo = (e) =>{
    const todoremove = e.target;
    let near = todoremove.previousElementSibling.innerText;
    let parentEle = todoremove.parentElement;
    localTodo = localTodo.filter((curr)=>{
        return curr!=near.toLowerCase();
    });

    addTodoListLocal(localTodo);
    parentEle.remove();
}
document.querySelector("#addbtn").addEventListener('click',(e)=>{
    addTodoList(e);
})
mainTodo.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("deleteBtn")){
        removeTodo(e);
    }
})