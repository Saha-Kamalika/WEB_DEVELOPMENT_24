const generator = (str) =>{
    if(str.length>280 || str.trim().length===0) return false;

    str=str.split(" ");
    // ans=str.reduce((acc, curr)=>{
    //     return acc+curr.replace(curr.charAt(0), curr.charAt(0).toUpperCase());
    // },"#");
    str=str.map(curr=>{
        curr.charAt(0).toUpperCase()+curr.slice(1);
    })
    str=`#${str.join("")}`;
    return str;
}
generator("I love you Bishtu");