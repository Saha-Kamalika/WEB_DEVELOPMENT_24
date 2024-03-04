let addbtn = document.getElementById("addbtn");
let getbtn = document.getElementById("getbtn");
let rembtn = document.getElementById("rembtn");

const studentData = {
    firstName : "Kamalika",
    lastName : "Saha",
    stream : "ECE",
    college : "AOT",
    grade : "A+",
    address : {
        city : "Howrah",
        pin : "711201"
    }
};

const addData = () =>{
    localStorage.setItem("myData", JSON.stringify(studentData));
    console.log("Data added successfully");
}

const getData = () =>{
    let getMyData = JSON.parse(localStorage.getItem("myData"));
    console.log("Retrieved from Local Storage: ", getMyData);
}

const remData = () =>{
    localStorage.removeItem("myData");
    console.log("Data removed successfully");
}

addbtn.addEventListener('click', addData);
getbtn.addEventListener('click', getData);
rembtn.addEventListener('click', remData);