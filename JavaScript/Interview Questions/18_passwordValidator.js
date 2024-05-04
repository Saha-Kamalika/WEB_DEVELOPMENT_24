const passwordValidate = (pass)=>{
    let hasLower=false;
    let hasUpper=false;
    let hasDigit=false;
    for(let char of pass){
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90) hasUpper=true;
        else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122) hasLower=true;
        else if(!isNaN(Number(char))) hasDigit=true;
    }
    if(!hasDigit || !hasLower || !hasUpper) return false;
    return true;
}

console.log(passwordValidate("Kamalika01"));