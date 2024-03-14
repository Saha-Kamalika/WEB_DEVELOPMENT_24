const createPeriodicElement =(symbol, atNo, name) =>{
    const element = document.createElement('div');
    element.classList.add("element");
    element.innerHTML = symbol;
    element.setAttribute("data-atomic-number",atNo);
    element.setAttribute("data-element-name", name);
    return element;
}
const handleElementClick = (e) =>{
    const target = e.target;
    if(target.classList.contains("element")){
        const atNo = target.getAttribute("data-atomic-number");
        const elemName = target.getAttribute("data-element-name");
        alert(`Atomic Number: ${atNo}\nElement Name: ${elemName}`);
    }
}
const intializePeriodicTable = () =>{
    const mainBody = document.querySelector(".mainBody");
    for(let i=1;i<=50;i++){
        const element = createPeriodicElement(`Elem${i}`, i, `Element ${i}`);
        mainBody.append(element);
    }
    mainBody.addEventListener('click', (e)=>{
        handleElementClick(e);
    });
}
intializePeriodicTable();