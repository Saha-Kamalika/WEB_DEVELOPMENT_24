const isPalindrome = (str) =>{
    str=str.toLowerCase().replace(/\W/g,"");
    let rev=str.split("").reverse().join("");
    return str===rev;
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));