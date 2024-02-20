let usersc= 0;
let compsc= 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScPara = document.querySelector("#usersc");
const compScPara = document.querySelector("#compsc");

const genCompChoice =()=>{
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        usersc++;
        userScPara.innerText = usersc;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compsc++;
        compScPara.innerText = compsc;
        msg.innerText =`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice == compChoice) drawGame();

    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})