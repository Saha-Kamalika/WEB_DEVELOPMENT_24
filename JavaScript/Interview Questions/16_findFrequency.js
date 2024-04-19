const frequency =(arr)=>{
    let count={};
    for(let elem of arr){
        count[elem] = (count[elem] || 0)+1;
    }
    console.log(count);
}
console.log(frequency([2,3,1,2,4,2,1]));