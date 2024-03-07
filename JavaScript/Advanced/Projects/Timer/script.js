const countDownElem = document.getElementById("countDown");
const resetValueElem = document.querySelector(".resetValue");

let start = 0;
let intervalId;
const startTimer = () =>{
    intervalId = setInterval(()=>{
        countDownElem.innerText = start++;
    }, 1000);
};

const stopTimer = () =>{
    showTime();
    clearInterval(intervalId);
};

const resetTimer = () => {
    clearInterval(intervalId);
    start = 0;
    countDownElem.innerText = start;
};

const showTime = () =>{
    const newPara = document.createElement("p");
    newPara.innerText = `The time is ${--start}`;
    resetValueElem.append(newPara);
}
const clearTimer = () =>{
    resetValueElem.innerText = "";
}
document.querySelector(".startBtn").addEventListener('click', startTimer);

document.querySelector(".resetBtn").addEventListener('click', resetTimer);

document.querySelector(".stopBtn").addEventListener('click', stopTimer);

document.querySelector(".timeBtn").addEventListener('click', showTime);

document.querySelector(".clearBtn").addEventListener('click', clearTimer);