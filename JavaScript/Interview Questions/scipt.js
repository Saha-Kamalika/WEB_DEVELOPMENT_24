// let and const got introduced from es6 
// var: global scope let & const: block scope
// Var and let can be declared without intialization
// Var and let can be updated but const cant be
// Shadowing: a technique in which a variable with same name overlaps the variable present in the parent scope
// var->let: shadowing ✅
// let->var:  error(shows variable already declared)
// -there are 2 phases involved in execution context: creation and execution . 
// Creation phase: 
// I) creation of window object 
// II)then heap memory is allocated and then initialise functions and variables with undefined (the whole function is stored inside the window object) . 
// Execution phase: 
// In execution the code is executed line by line and assigns variables .
// -Hoisting : during creation phase js engine moves function declarations and variable to top of the code 
// -var variables are obv hoisted let variables are not (in normal sense they are hoisted in temporal dead zone)
// -temporal dead zone : a state in which let and const variables specifically are in scope but have not been declared yet.

//2
//return total marks for students with marks greater than  60 after 20 marks have been added to those who scored less than 60

// map: returns a new array after operating on each elements of the array
// filter: returns a new array of elements which satisfies the condition
// reduce: returns a single value afterr operating on all elems 
// chaining can be performed on map, filter and reduce but not on forEach()
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 35 }
];

const tot = students
    .map((curr) => {
        if (curr.marks < 60) {
            curr.marks += 20;
        }
        return curr;
    })
    .filter((curr) => {
        return curr.marks > 60;
    })
    .reduce((acc, curr) => {
        return acc + curr.marks;
    }, 0);

console.log(tot); //149

//3 functions

const square = function (n){
    return n*n;
}
square(4);    //anonymous functions

closures: when the outer variables or functions of the parent scope can be accessed from the inner scope

// first order func: functions can be passed to another func and can be retured as well after performing calculations

const sq = function (n) {
    return n * n;
};

const printSquare = function (fn) {
    console.log("Square is " + fn(5));
};

printSquare(sq);    

//types of func: named,anonymous,func exp, arrow func, IIFE, callback, higher order

//IIFE: immediatelly invoked function expression..enclosed within ()...executed when the script is loaded

//spread and rest operators
let arr =[1,2,3,4];
const res= function (...nums){ //in case of multiple params the rest operator should be placed at last
    return nums[0]*nums[1];
}
console.log(res(...arr));  //spread operator


//diff between arrow func and normal func
>> syntax
>> implicit return keyword
>> normal func can take "arguments" but arrow func cannot 
>> this keyword...normal func refers to current obj whereas arrow func refers to global object

//function currying: a function accepts one argument at a time and expects another argument
function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

//event propagation:
when an event occurs inside an element which is located inside another element and both of them have their registered event handlers, the order or sequence in which the event will be executed is known as event propagation
by default: event bubbling (botton-top)
event capturing/trickling (top-bottom)

in order to stop bubbling: event.stopPropagation();

Event Delegation: event listeners are applied on parent elements instead of individually defining on the child elements

//web storage api
allows to store and retrieve data to/from the browser
>> localStorage obj: allows to store datas in the local storage of the web browser with no expiration Date, data not deleted when browser closed
>> sessionStorage: similar to above; stores data for particular session

.setItem("key","value")
.getItem("key")
.removeItem("key")
.length()
.clear()

//promises: similar to promises in real life. a promise is used to acheive asynchronous operations overcoming the use of deeply nested callbacks
it returns a single value which may not be available yet but will be available in the future.
it exists in 3 states: pending, resolved, rejected
 when promise is resolved it returns the resolved value else it returns the error message

const sub = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) resolve("Fulfilled promise");
    else reject("Rejected promise");
});

sub.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

//promise combinator: Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()

//using async await
const pro = async () =>{
    const res= await fetch(
        
    )
}
 
forEach() is used to iterate over arrays or objects and perform some operation on the values

== -> compares only the content of 2 variables (type coersion done)
=== ->compares both values and type

DOM: Document Object Model 
whenever the browser renders the html document, it creates an object based on the html document,usig this dom, we can manipulate or change the varioud elements of the html document

const pro1 = new Promise((res,rej)=>{
    let arr=[0,1,2];
    if(arr.length>3){
        rej("cannot operate");
    }
    else{
        let sum=0;
        for(let i of arr) sum+=i;
        res("Sum is "+sum);
    }
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})