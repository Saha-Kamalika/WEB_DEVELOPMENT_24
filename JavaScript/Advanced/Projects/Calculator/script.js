const answer = document.querySelector(".answer");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if(btn.value === "AC") answer.value = "";
        else if(btn.value === "DE") answer.value = answer.value.slice(0,-1);
        else if(btn.value === "=") {
            answer.value = eval(answer.value).toFixed(6);
            console.log(btn.value);
        }
        else {
            answer.value += btn.value;
        }
    })
})

