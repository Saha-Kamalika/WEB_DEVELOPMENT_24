// const func2 = () =>{
//     setTimeout(()=>{    //sent to web api after timer of 3s terminates it is send to the message queue, from there through event loop again it is send onto the execution stack for execution phase.
//         console.log("Function 2 is called");
//     }, 3000);
// }

// const func1 = () =>{
//     console.log("Function 1 is called");
//     func2();
//     console.log("Function 1 is called again");
// }
// func1();

// //callback hell or pyramid of doom


// getData = (dataId, getNextData) =>{
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, ()=>{
//     console.log("Getting data2");
//     getData(2, ()=>{
//         console.log("Getting data3");
//         getData(3, ()=>{
//             console.log("Getting data4");
//             getData(4)
//         })
//     })
// })


// //Promises  -> can be pending, resolved, rejected
// getData = (dataId, getNextData) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error occured");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     })
// }



///Promise chaining
const getPromise = () =>{
    return new Promise((resolve, reject)=>{
        // console.log("I am a promise");
        // resolve("fullfilled promise");
        reject("error occured");
    })
}
let promise = getPromise();
promise.then((st)=>{
    console.log("Success", st);
})
promise.catch((err)=>{
    console.log("Failure", err);
})

const getData = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data => " ,data);
            resolve("success");
        }, 2000)
    })
}
// console.log("getting data1");
// getData(1)
//     .then((res)=>{
//         console.log("getting data2");
//         return getData(2);
//     })
//     .then((res)=>{
//         console.log("getting data2");
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log("getting data3");
//         return getData(4);
//     })
//     .then((res)=>{
//         console.log(res);
//     })

(async function getAllData(){
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
})()   //IIFE
