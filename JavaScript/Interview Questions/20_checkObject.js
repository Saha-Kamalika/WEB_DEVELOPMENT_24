const checkEmpty =(obj)=>{
    return Object.keys(obj).length===0? "it's empty":"it's not empty";
}
console.log(checkEmpty({}));
console.log(checkEmpty({name: "kamalika"}));