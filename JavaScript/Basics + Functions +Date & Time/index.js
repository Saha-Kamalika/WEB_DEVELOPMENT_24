// console.log("Hello World");

// var myName = 'kamalika saha';
// console.log(myName);


// Primitive Data types in javascript--> 6 types
// undefined..typeof()===undefined
// Boolean....boolean
// Number....number
// String...string
// BigInt...bigint
// Symbol...symbol
// null

//typeof operator
//console.log(typeof(myName));

//null vs undefined
// var iAmUseless = null;
// console.log(typeof(iAmUseless));   //object type

// var iAmStandby;
// console.log(typeof(iAmStandby));   //undefined type

//NaN --> not a number  ...."Rumi" - "Bishtu"
//property of global object...a variable in global scope...initial value is Not-A-Number

// var myNum =7980169813;
// var myName="kamalika";

// console.log(isNaN(myNum));
// console.log(isNaN(myName));

// NaN === NaN
// Number.NaN === NaN
// isNaN(NaN)
// isNaN(Number.NaN)
// Number.isNaN(NaN)
// console.log(NaN === NaN); //false
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN));  //true
// console.log(isNaN(Number.NaN));  //true
// console.log(Number.isNaN(NaN));   //true

//exponentiation operator
//console.log(9**2);

//swap 2 nos without 3rd var
// var a=10, b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a+" "+b);

//differnce between == and ===
// var num1= 5;
// var num2= '5';
// console.log(num1 == num2); //checks value
// console.log(num1 === num2); //checks datatype

// var year = 2100;
// if((year% 4==0 && year%100!=0) || (year%400==0)){
//     console.log(year+" is a leap year");
// }
// else console.log(year+" is not a leap year");

//there are 5 falsy value in js--> 0, null, "", undefined, NaN

// var score;
// if(score=0){
//     console.log("we lost");
// }
// else{
//     console.log("we won");
// }
// console.log(score);



// let nums = prompt("Enter a number: ");
// if(nums%5 === 0){
//     console.log(nums, " is a multiple of 5");
// }
// else{
//     console.log(nums, " is not a multiple of 5");
// }


// for(let i=1;i<=5;i++){
//     var pattern ="";
//     for(let j=1;j<=i;j++){
//         pattern+=" *";
//     }console.log(pattern);
// }
//functions  -> reusable block of code
// function sum(){
//     var a=10, b=20;
//     console.log(a+b);
// }
// sum();

// function add(a, b){   //function parameters
//     //console.log(a+b);
//     return (a+b);
// }
// //sum(5, 10);   //function arguments

// //function expression -> create a function and put it into the variable

// var ans= add(10,40);
// //ans;
// console.log(ans);

// //anonymous function
// var res = function(a, b){
//     console.log(a+b);
// }
// //console.log(res(20, 20));
// res(20, 60);


//IIFE (Immediately Invoked Function Expression)

(function(a,b){
    console.log(a+b);
    return a+b;
}(5,6));

const calculator = (num1,num2,operator) =>{
    let result;
    switch(operator){
        case "+": 
            result= num1+num2;
            return result;
        case "-":
            result= num1-num2;
            return result;
        case "*":
            result= num1*num2;
            return result;
        case "/":
            if(num2==0) return 'cannot be divisible by 0';
            result= num1/num2;
            return result;
        default: return 'no matched operator found';
    }
}
console.log(calculator(5,10,"+"));
console.log(calculator(5,10,"-"));
console.log(calculator(5,10,"*"));
console.log(calculator(10,0,"/"));
console.log(calculator(10,5,"/"));
// console.log(`The sum is ${result}`);



///////////////////////////////////////ECMAScript2015 / ES6 ///////////////////////////////////////

// let vs const vs var

// let myName="rumi";
// console.log(myName);
// myName="kamalika";
// console.log(myName);

// const myName="rumi";
// console.log(myName);
// myName="kamalika";
// console.log(myName);

// var => function scope
// let cinst => block scope
// function display(){
//     var firstName= "kamalika";
//     console.log(firstName);
//     if(true){
//         var lastName= "Saha";
//         console.log("inner "+ firstName);
//         console.log("inner "+ lastName);
//     }
//     console.log(firstName+" "+lastName);
// }
// function display(){
//     let firstName= "kamalika";  //same for const
//     console.log(firstName);
//     if(true){
//         let lastName= "Saha";
//         console.log("inner "+ lastName);
//         console.log("inner "+ firstName);
//     }
//     console.log(firstName+" "+lastName);
// }
// console.log(firstName);
// display();

//Template literals or template strings

// for(var i=1; i<=10; i++){
//     let tableOf = 8;
//     console.log(`${tableOf} * ${i} = ${tableOf*i}`);
// }

//default arguments
// function mult(a, b=1){
//     return a*b;
// }
// console.log(mult(2));

//fat arrow function  ===> function must be mandatorily defined before calling it.
// const sum = () => `the sum is ${(a=10)+(b=5)}`
// console.log(sum());

//arrays 
// var names = new Array //not mandatory
// var names =['kamalika', 'srijit', 'bishtu', 'rumi', true, 22, false, undefined]; //not strict, can store any datatypes
 //     lower index/boundary                                  upper index/boundary


//traversal in array

// console.log(names[1]);
// for(var i=0; i<names.length; i++){
//     console.log(names[i]+" ");
// }

//after es6 we have for in loop and for of loop
//for in loop  --> gives index numbers of the elements

// for(let elements in names){
//     console.log(elements);
// }

//for of loop    ->value of the elements
// for(let ele of names){
//     console.log(ele);
// }

// names.forEach(function(element, index, array){
//     console.log(element+" index : "+index);
//     //cannot use break statement
// });
// names.forEach((element, index, array)=>{
//     console.log(`${element} index: ${index}`);
// });

// var names =['kamalika', 'srijit', 'bishtu', 'rumi', 'srijit'];
// //searching and filter in array
// //indexOf()
// console.log(names.indexOf('bishtu', 3));
// //lastIndexOf()
// console.log(names.lastIndexOf('bishtu'));

//includes()
// console.log(names.includes('bishtu'));  //performs forward search

//find()  ->returns only 1 element..returns undefined if no such element is found
//arr.find(callback(element, index, array))

// const prices = [100,200,300,400,500,600];
// const findEle = prices.find((currValue) =>{
//     return currValue < 400;
// })
// console.log(findEle); 
//
// console.log(prices.find((currValue)=> currValue<400 ));

//findIndex() ->returns -1 if condition not satisfied

//filter() -> returns new array
// const newArr = prices.filter((ele, index)=> ele<400);
// console.log(newArr);





const res = arr.filter((curr, index)=>{
    return arr.indexOf(curr) === index;
})
console.log(res);

console.log([...new Set(arr)]);

//sort()   ..default ->ascending order //coverts to string then sorts
// console.log(names.sort());
let arr = [1,2,3,1,4,2,4,4,5,7,6,8,9];
arr.sort((a,b)=>{
    if(a>b) return 1;
    if(b>a) return -1;
})
console.log(arr);


//insert, add, delete replace()
//CRUD
// const animals = ['pigs', 'cows', 'sheep'];
// push() returns new length of array
// console.log(animals.push('chicken'));

// //unshift() ->add elements to the start
// console.log(animals.unshift('chicken'));
// console.log(animals);

// //pop() ->removes the last
// console.log(animals.pop());
// console.log(animals);

// //shift -> removes first
// console.log(animals.shift());
// console.log(animals);

//to update in between->splice()
// const newAr = animals.splice(2, 0, 'kamalika');
// console.log(animals);
// const newArr =animals.splice(animals.length, 0, 'bishtu');
// //console.log(newArr);    //returns an empty array...returns deleted element in new array
// //console.log(animals);
// const newArrr =animals.splice(animals.length-1, 1, 'Bishtu');
// //console.log(animals);

// const indexOfName = animals.indexOf('kamalika');
// if(indexOfName != -1){
//     animals.splice(indexOfName,Infinity);
//     console.log(animals);
// }
// else{
//     console.log('no data');
// }

//map and reduce
// const array =[1,4,9,16,25];
// // let newArr = array.map((curr, index,arr)=> curr>9);
// // console.log(newArr);
// let newArr = array.map((curr, index, arr)=>{   //does not mutate the original array
//     return `Index no = ${index} and the value is ${curr} of array ${arr}`
// });
// console.log(newArr);
//forEach() returns undefined array
///return the square root of the elements of an array
// let arr= [25, 36, 49, 64, 81];
// let ans= arr.map((curr, index, arr)=> {
//     return Math.sqrt(curr)
// });
// console.log(ans);

//multiply each elem by 2 and return those > 10
// let arr1 = [2,4,6,8];
// let res = arr1.map((curr) =>{
//     return curr*2;
// }).filter((curr) =>{   //chaining of methods
//     return curr>10;
// });
// console.log(res);

//reduce() ->covert 3d/2d array to 1d array
// ueses a reducer function on each element of the array...resulting in single output value
//reducer func takes 4 arguments.. accumulator, curr element, curr index, source array

// let array = [5,3,1];
// let result= array.reduce((accumulator, curr, index, arr)=>{
//     return accumulator+=curr;
// }, 10);  //here 10 is the initial value
// console.log(result);
//flattening an array using reduce()
// let arr=[
//     ['kamalika', 'srijit'],
//     ['kamal', 'alo'],
//     ['alpana', 'hemanta']  //but when nested array does not flattens
// ];
// let newArrr= arr.reduce((acc, curr)=>{
//     return acc.concat(curr);
// });
// console.log(newArrr);

///strings
// let naam= 'kamalika';
// console.log(naam.length);
// let sentence= 'ki naame deke bolbo tomake \"mondo koreche amake oi duti chokhe\"';
// console.log(sentence);

//indexOf()
// const data= "my name is kamalika saha";
// console.log(data.indexOf("kamalika"));
// console.log(data.lastIndexOf("a",8));

//search()

//extracting string from strings

// console.log(data.slice(3, -2));

//substring() ->similar to slice() but does not accept negative indexes...if negative control goes to 0 index

//substr()-> similar to slice(), second parameter specifies the length of the substring required

//replacing string content
//replace(searchFor, replaceWith)
// let dataa= data.replace("kamalika","Kamalika");
// console.log(dataa);

//charAt()
//charCodeAt() ->returns unicode integer between 0-65535
//property access []
//toUpperCase(), toLowerCase()
//concat 
//trim() -> removes whitespace from both sides of the string
//to convert a string to array
// let char ="a,b,c|d,c,e";
// console.log(char.split(","));
// console.log(char.split(" "));
// console.log(char.split("|"));


////date and time 
//date objects contain a number that represents milliseconds since 1 january 1970
//4 ways to create date objects
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// let currDate = new Date()
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());   //return millisconds since 1 jan 1970

// console.log(new Date(2024, 1, 1, 20, 0, 0, 0));
// //new Date(datestring)
// console.log(new Date("September 1, 2000 12:14:00").toLocaleString());
// var date= new Date("March 27, 1962 12:00:00");
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

//setting custom dates
// var myDate = new Date();
// console.log(myDate.setFullYear(2024));
// console.log(myDate.setFullYear(2000));
// console.log(myDate.setMonth(8));
// console.log(myDate.setDate(1));
// // console.log(myDate.setDay(6));
// console.log(myDate.toLocaleString());



///Time Method
// var myTime = new Date();
// console.log(myTime.getTime());
// console.log(myTime.getHours());
// console.log(myTime.getMinutes());
// console.log(myTime.getSeconds());
// console.log(myTime.getMilliseconds());


//set time
// var myTime = new Date();
// console.log(myTime.setTime(5));
// console.log(myTime.setHours(5));
// console.log(myTime.setMinutes(5));
// console.log(myTime.setSeconds(5));
// console.log(myTime.setMilliseconds(5));

////displaying date and time on browser
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h2>Displaying Date and Time using JS</h2>
//     <button onclick="myFunc()" style="cursor: pointer;">Click Here</button>
//     <!-- <p id="demo"></p> -->
//     <p id="time"></p>
//     <p id="date"></p>
//     <script>
//         function myFunc(){
//         var d = new Date();
//         //document.getElementById("demo").innerHTML = d.toLocaleString(); //toLocaleTimeString(), toLocaleDateString()
//         document.getElementById("time").innerHTML = d.toLocaleTimeString();
//         document.getElementById("date").innerHTML = d.toLocaleDateString();
//         }
//     </script>
// </body>
// </html>

///Javascript math objects
// console.log(Math.PI);
// let num= 69.69999;
// console.log(Math.round(num));
//Math.pow()
//Math.sqrt()
//Math.abs()-> negative to positive
//Math.ceil()
//Math.floor()
//Math.min(), Math.max()
//Math.random() ->random number between 0 and 1
//Math.trunc() ->return integer part of the number
