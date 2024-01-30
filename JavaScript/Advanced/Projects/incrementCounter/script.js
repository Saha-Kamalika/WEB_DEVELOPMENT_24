const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter =() =>{
        const targetCount = +counter.getAttribute('data-target');
        const startingCount= Number(counter.innerHTML);
        const inc = targetCount/100;
        if(startingCount<targetCount){
            counter.innerHTML = `${startingCount+inc}`;
            setTimeout(updateCounter, 100);
        }
        else counter.innerHTML=targetCount;
    }
    updateCounter();
})