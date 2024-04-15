const startsWith = (str,substr) =>{
    return str.toLowerCase().slice(0,substr.length) === substr.toLowerCase();
}
console.log(startsWith("Hello JS","hello"));
console.log(startsWith("Hello JS","hells"));