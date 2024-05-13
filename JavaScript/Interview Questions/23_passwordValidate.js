const validatePass = (pass) =>{
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(pass);
}
console.log(validatePass("Kamalika01@")); //true
console.log(validatePass("kamalika")); //false