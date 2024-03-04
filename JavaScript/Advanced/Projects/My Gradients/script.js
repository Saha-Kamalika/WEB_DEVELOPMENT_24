let btn1= document.getElementById("myBtn");
let btn2= document.getElementById("myBtn2");
let copyCode = document.querySelector(".copyCode");
let rgb1 = "#000";
let rgb2 = "#fff";
const hexVal = ()=>{
    let str="#";
    let myHexVal ="0123456789abcdef";
    for(let i=0;i<6;i++){
        let idx= Math.floor(Math.random()*16);
        str+=(myHexVal[idx]);
    }
    return str;
}
const handleBtn1 = ()=>{
    rgb1 = hexVal();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}
const handleBtn2 = ()=>{
    rgb2 = hexVal();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyCode.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);
copyCode.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyCode.innerText);
    alert('CSS copied to clipboard');
})