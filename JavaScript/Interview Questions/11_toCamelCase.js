const toCamel = (str) =>{
    return str.toLowerCase().split(" ").map((curr,index)=>{
        if(index===0) return curr;
        else return curr.charAt(0).toUpperCase() + curr.slice(1);
    }).join("");
}
console.log(toCamel("I am Kamalika Saha"));