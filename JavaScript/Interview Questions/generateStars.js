const generate = (arr)=>{
    return arr.map((curr,ind)=>{
        return `${ind+1}: ${"*".repeat(curr)}`
    }).join("\n");
}
console.log(generate([1,2,3,4]));