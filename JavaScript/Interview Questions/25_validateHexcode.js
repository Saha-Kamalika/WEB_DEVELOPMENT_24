const validateHex = (hex) => {
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hex);
}
console.log(validateHex("#ab12345")); //false
console.log(validateHex("#fff")); //true
console.log(validateHex("ab123")); //false
