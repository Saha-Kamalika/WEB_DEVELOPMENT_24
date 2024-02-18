let btnMode= document.querySelector("#mode");
let curMode= "light";
let body=document.querySelector("body");
btnMode.addEventListener("click", ()=>{
    if(curMode==="light"){
        //document.querySelector("body").style.backgroundColor="black";
        curMode ="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        //document.querySelector("body").style.backgroundColor="white";
        curMode ="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})