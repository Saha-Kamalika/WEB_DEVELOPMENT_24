// find the longest word present in a String
// ignore all the starting and trailing spaces
// return false if null

const findLongestWord = (str) =>{
    if(str.trim().length===0) return false;

    words=str.split(" ");
    // words=words.sort((a,b)=> b.length-a.length);
    // return words[0];

    return words.reduce((acc, curr)=> curr.length>acc.length ? curr:acc);
}

findLongestWord("Hello Kamalika Saha here");