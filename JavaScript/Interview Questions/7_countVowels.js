const count = (str) =>{
    str=str.toLowerCase().split("");
    // let c=0;
    // for(let i=0;i<str.length;i++){
    //     if(str[i]==='a' || str[i]=='e' || str[i]=='o' || str[i]=='i' || str[i]=='u') c++;
    // }
    // return c;
    let c=0;
    let vowels=['a','e','i','o','u'];
    for(let char of str){
        if(vowels.includes(char))
            c++;
    }
    return c;
}

console.log(count("My name is KAmalikA Saha"));