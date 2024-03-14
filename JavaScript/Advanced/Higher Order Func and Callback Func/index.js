// var a,b;
// const add=(a,b)=>{
//     return a+b;
// }
// const subs=(a,b)=>{
//     return Math.abs(a-b);
// }
// const mult=(a,b)=>{
//     return a*b;
// }

// const calculator =(a,b,operator)=>{
//     return operator(a,b);
// }
// console.log(calculator(10,2,subs));

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c); //I can't use C 
// }

// first();


const mathOperation = (a,b,operation)=>{
  return operation(a,b);
}
const add = (a,b)=>{
  return a+b;
}
const sub = (a,b)=>{
  return a-b;
}
console.log(mathOperation(10,1,add));