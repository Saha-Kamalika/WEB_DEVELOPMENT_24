const removeDup = (arr) =>{
    let ans=([...new Set(arr)]);
    return ans;
}
console.log(removeDup([1,2,2,4,5,5,6]));