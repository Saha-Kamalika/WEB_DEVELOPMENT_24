const validateCard = (str) =>{
    str=str.replace(/\D/g,"");
    let revNum;
    for(let i=str.length-1;i>=0;i--){
        revNum=revNum+str[i];
    }
    let doubleNum=revNum.split("").map((curr,ind)=>{
        if(ind%2 != 0) 
        {
            curr=curr*2;
            if(curr>9) curr=curr-9;
        }
    }).reduce((acc,curr)=>acc+Number(curr),0);
    return doubleNum%10 === 0;
}
console.log(validateCard("0000 0000 0000 0000"));