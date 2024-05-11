const validateEmail = (email) =>{
    return /^[A-Za-z0-9]+(?:[-.+%][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z0-9]{2,}$/.test(email);
}

console.log(validateEmail("kamalikasaha01@gmail.com"));
console.log(validateEmail("kamalika..saha01@gmail.com"));
console.log(validateEmail("_kamalika.saha01@gmail.com"));
console.log(validateEmail("kamalika.saha_01@gmail.com"));