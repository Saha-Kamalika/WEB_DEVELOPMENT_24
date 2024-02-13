let divs= document.querySelectorAll("div");
console.log(divs);

let idx=1
for(div of divs){
    div.innerText = `it is div ${idx}`;
    idx++;
}