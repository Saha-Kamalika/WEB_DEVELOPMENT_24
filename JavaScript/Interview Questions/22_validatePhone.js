const validatePhone = (number) =>{
    return /^[6-9][\d]{9}$/.test(number);
}
console.log(validatePhone("9876543210"));
console.log(validatePhone("6789012345"));
console.log(validatePhone("087278922"));