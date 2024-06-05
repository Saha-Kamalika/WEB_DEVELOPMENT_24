//JSON: JavaScript Object Notation: lightweight standard-text based format for storing structured data in the form of key-value pairs for transferring data in web applications

var object = {
    key_1: "kamalika",
    key_2: "bally",
    key_3: 7980169813
};
var strObj=JSON.stringify(object);
console.log(strObj);
console.log(typeof strObj);

var orObj=JSON.parse(strObj);
console.log(orObj);
console.log(typeof orObj);