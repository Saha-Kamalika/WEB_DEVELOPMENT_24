const countChar = (word, char) =>{
    word=word.toLowerCase();
    char=char.toLowerCase();

    word=word.split("");
    ans=word.reduce((acc, curr)=>{
        if(curr===char) acc++;
        return acc;
    },0);
    return ans;
}

countChar("Kamalika", "K");