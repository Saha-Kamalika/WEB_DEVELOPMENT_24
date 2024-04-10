const digiSum = (num) =>{
    let arr=Array.from(String(num), Number);
    return arr.reduce((acc,curr) => acc+=curr,0);
}

console.log(digiSum(1234));
console.log(digiSum(123456));

//take a number as input and find its sum of diigts