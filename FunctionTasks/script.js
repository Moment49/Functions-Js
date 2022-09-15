//Assignment 1
// function add7(x){
//     return x + 7;
// }

// console.log( add7(5));

//A function to multiply a number
// function multiply(x, y){
//     return x * y;
// }

// console.log(multiply(5, 5));

// function capitalize(string){

//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    
// }

// console.log(capitalize('ELVIS'))

//A function to get the last letter of a string
// function lastLetter(str){
//     let newString = str.substr(-1);
//     return newString;
// }
// console.log(lastLetter('Elvis'))

//A program to update a counter on Every User Input

//A counter to keep track of change
// let counter = 0;
// let userInput = prompt('Please enter any Input so we can keep track of the changes');
// //Condition to test if user Input is empty
// if (userInput === "" || userInput === null){
//     console.log('Please Input something')
// }else{
//     counter = counter + 1;
//     console.log(`The counter says : ${counter}`);
// }

let counter = 0;
let userInput = document.querySelector('input');
 
function userChange(e){
    let userAnswer = userInput.value;
    if (userAnswer !== "" || userAnswer !== null){
        counter ++;
        console.log(`The total number of count: ${counter}`)
    }else{
        console.log(`No Input is detected and the count is: ${counter}`)
    }
}
userInput.addEventListener('keypress', userChange)






























