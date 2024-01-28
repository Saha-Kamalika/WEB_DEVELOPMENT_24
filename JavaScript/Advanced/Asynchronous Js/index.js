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

