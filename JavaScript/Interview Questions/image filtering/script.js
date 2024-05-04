const tabs=document.querySelector(".tabs");
const images=document.querySelectorAll(".images");

tabs.addEventListener('click',(event)=>{
    if(event.target.dataset.category != undefined)
        filterSearch(event.target.dataset.category);
})

const filterSearch = (value) =>{
    images.forEach((curr)=>{
        if(curr.dataset.category === value || value ==="All"){
            curr.style.display="block";
        }
        else curr.style.display="none";
    })
}