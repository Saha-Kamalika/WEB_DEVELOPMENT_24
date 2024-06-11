const URL = "https://cat-fact.herokuapp.com/facts";

const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg")

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    msg.innerText = data[0].text;
} 
btn.addEventListener("click", getFacts);
 
