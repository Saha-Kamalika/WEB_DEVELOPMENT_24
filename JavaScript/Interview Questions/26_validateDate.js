const validateDate = (date) => {
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(date);
}

console.log(validateDate("13/02/2022")); //false
console.log(validateDate("09/05/1900")); //true
console.log(validateDate("05/20/2000")); //true