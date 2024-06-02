//JSON ->JavaScript Object Notation
var object = {
    key_1: "kamalika",
    key_2: "bally",
    key_3: 7980169813
};

var jsonObj= JSON.stringify(object);
console.log(jsonObj);
typeof(jsonObj);

var obj= JSON.parse(jsonObj);
console.log(obj);
typeof(obj); 