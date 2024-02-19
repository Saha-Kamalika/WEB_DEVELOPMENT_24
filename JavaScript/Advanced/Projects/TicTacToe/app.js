let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#btn");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector('.msg-container')
let count=0;

let turn0= true;

let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0= false;
        }
        else{
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled = true;
        count++;
        let isWin = checkWinner();
        if(count==9 && !isWin){
            msg.innerText = `It's a draw!!`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
    });
});
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
const setGame = ()=>{
    count=0;
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const showWinner = (value1) =>{
    msg.innerText = `Congratulations, Winner is ${value1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner =()=>{
    for(let pat of winPatterns){
        let value1= boxes[pat[0]].innerText;
        let value2= boxes[pat[1]].innerText;
        let value3= boxes[pat[2]].innerText;
        if(value1!="" && value2!= "" && value3!=""){
            if(value1==value2 && value2==value3){
                showWinner(value1);
            }
        }
        
    }
}

newBtn.addEventListener("click", setGame);
reset.addEventListener("click", setGame);
