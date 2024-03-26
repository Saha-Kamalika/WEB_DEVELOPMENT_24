const user_con=document.querySelector(".user-container");
const reg_btn = document.querySelector(".registration-btn");
const login_btn = document.querySelector(".login-btn");
const onreg = document.querySelector(".onreg");
        
reg_btn.addEventListener('click', ()=>{
    user_con.classList.add("login-section--display")
})

login_btn.addEventListener('click', ()=>{
    user_con.classList.remove("login-section--display");
})

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
        
    loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
        
    const emailInput = document.getElementById('email1').value;
    const name = getNameFromEmail(emailInput);
        
    alert(`Hi ${name} start shopping with us!`)
        
    window.location.href = 'index.html';
    });
        
    function getNameFromEmail(email) {
        const parts = email.split('@');
        const namePart = parts[0];
        const name = namePart.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    return name;
    }
});
        