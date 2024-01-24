//DOM(Document Object Model) in javascript
// Window-> global object                     DOM-> child object of Window
// the objects, method, properties does not refer the window object that is we can directly write location.href;
// but the document object is needed to use the objects and properties in DOM document.getElementById()
// Documemt object deals with the HTML elements themselves

//through javascript--> object, array, function
//DOM Vs BOM (Browser Object Model)
                    //navigator
                    //history
                    //screen
                    //location etc

////Navigation in DOM
document.documentElement //returns the root element of the document
document.body.childNodes //includes text(tab enter and whitespaces)
document.children //does not include txt
document.childNodes.length 
document.body.hasChildNodes() 
document.body.firstElementChild.firstElementChild
// const childOne = document.body.firstElementChild.firstElementChild
// undefined
// childOne.style.color = "white"
// 'white'
// const childTwo = document.querySelector('.child-two')
// undefined
// childTwo.style.color = "yellow"
// 'yellow'

///fetching siblings
// document.body.nextSibling
// null
// document.body.nextElementSibling
// null
// document.body.previousElementSibling
// ​
// document.head.nextElementSibling


// console.log(document.getElementById('web-id').innerHTML);
// console.log(document.getElementsByClassName('web-class').innerHTML);
// console.log(document.querySelector('.web-class').innerHTML);
// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 




// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }
