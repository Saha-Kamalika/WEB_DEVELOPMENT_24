const areEqual = (arr1,arr2) =>{
    if(arr1.length!=arr2.length) return false;
    return arr1.every((curr,ind)=> curr===arr2[ind]);
}
console.log(areEqual([1,2,3],[1,2,3]));
console.log(areEqual([1,2,3],[1,2,4]));