const extract = (str) =>{
    let regex=/\d+/g;
    return str.match(regex);
}
console.log(extract("abc123bgf456"));
console.log(extract("no numbers"));
console.log(extract("100, 200 and 300"));