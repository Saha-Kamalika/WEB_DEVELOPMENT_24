const submitBtn = document.querySelector("#submitBtn");
const closeBtn = document.querySelector("#closeBtn");
let popup = document.querySelector("#popup");


const openPopup = () =>{
    popup.classList.add("openPopup");
}
const closePopup = () =>{
    popup.classList.remove("openPopup");
}
submitBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);