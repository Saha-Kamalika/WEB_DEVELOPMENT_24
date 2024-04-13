const cal = (arr) =>{
    let ans=arr.reduce((acc,curr)=> acc+=(curr*curr));
    return ans;
}
console.log(cal([1,2,3]));