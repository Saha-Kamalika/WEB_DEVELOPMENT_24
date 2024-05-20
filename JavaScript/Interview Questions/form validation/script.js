document.querySelector(".formSubmit").addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.querySelector("#username").value;
    const phone = document.querySelector("#phonenumber").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const cPass = document.querySelector("#confirmpass").value;

    const usernameRegex = /^[A-Za-z\d ]{3,20}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[6-9][\d]{9}$/;
 
    document.querySelectorAll(".error").forEach((curr)=>(curr.textContent="")); 

    let isValid=true;

    if (!usernameRegex.test(username)) {
        document.getElementById("usernameError").textContent = "Username is not valid.";
        isValid=false;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "password must be atleast 8 characters and include atleast one uppercase letter, one lowercase letter, on enumber, and one special character.";
        isValid=false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "please enter a valid email.";
        isValid=false;
    }
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "phone number must be 10 digits long ans start with 6, 7, 8 or 9.";
        isValid=false;
    }

    if(cPass!==password){
        document.getElementById("confirmPasswordError").textContent = "password does not match.";
        isValid=false;
    }
    let userData=[];
    if(isValid){
        let formClass=document.getElementsByClassName("form-control");
        Array.from(formClass).forEach((curr)=>userData.push(curr.value));
        Array.from(formClass).forEach((curr)=>(curr.value=""));
        console.log(userData);
        alert("Registration Successful");
    }
});
