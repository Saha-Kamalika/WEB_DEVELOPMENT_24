const calMed = (arr) =>{
    arr.sort((a,b)=>a-b);

    let mid=Math.floor(arr.length/2);
    if(arr.length%2===0){
        return (arr[mid]+arr[mid-1])/2;
    }
    else return arr[mid];
}
console.log(calMed([1,2,3,4,5]));
console.log(calMed([1,2,3,4]));