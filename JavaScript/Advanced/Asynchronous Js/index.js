const func2 = () =>{
    setTimeout(()=>{    //sent to web api after timer of 3s terminates it is send to the message queue, from there through event loop again it is send onto the execution stack for execution phase.
        console.log("Function 2 is called");
    }, 3000);
}

const func1 = () =>{
    console.log("Function 1 is called");
    func2();
    console.log("Function 1 is called again");
}
func1();

//callback hell or pyramid of doom


getData = (dataId, getNextData) =>{
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
getData(1, ()=>{
    console.log("Getting data2");
    getData(2, ()=>{
        console.log("Getting data3");
        getData(3, ()=>{
            console.log("Getting data4");
            getData(4)
        })
    })
})
