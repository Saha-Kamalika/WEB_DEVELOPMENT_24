//closures -> the inner function can access the variables of the outer function even when the outer function isn't executing

const outerFunc = () =>{
    var outerVar = "Im outer";
    const innerFunc = () =>{
        console.log(outerVar);
    }
    return innerFunc; //here the outerFunc execution stack dies , but the refernce of the vars are stored in the heap memory as closures
}
const closureFunc = outerFunc();
closureFunc();