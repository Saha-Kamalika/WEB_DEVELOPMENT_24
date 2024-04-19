const cal = (arr) =>{
    if(arr.length===0) return 0;
    let ans=arr.reduce((acc,curr)=> acc+=curr,0);
    return ans/arr.length;
}
console.log(cal([1,2,3,4,5]));
console.log(cal([1,-1,2,-2,3,-3]));
console.log(cal([]));