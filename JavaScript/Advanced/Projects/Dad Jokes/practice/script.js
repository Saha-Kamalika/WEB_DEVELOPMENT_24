const jokeBody = document.querySelector(".jokeBody");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () =>{
//     const setHeader={
//         headers:{
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         jokeBody.innerHTML= data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

const generateJokes = async ()=>{
    try{const setHeader={
        headers:{
            Accept: "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', setHeader)
    const data = await res.json();
    //console.log(data);
    jokeBody.innerHTML=data.joke;
    }catch(err){
        console.log("Oops error has occured");
    }
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();