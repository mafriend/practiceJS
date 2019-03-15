//calculator
/** 
 * Basic calculator functions to allow:
 * Addition
 * Subtraction
 * Multiplication
 * Division
 * AC: 
 * allow two numbers to have 1 of the 4 mathmatical operations above performed
 * Allow for and return a result
 * Allow for and return a number if numbers provided are valid numbers
 * Allow for and return positive and negative numbers 
 * Allow for and return decimal numbers 
 * Return an error if the numbers are not valid numbers 
 * 
 * Build steps:
 * 1. Build basic mathmatical operations that accept two values (add, subtract, multiply, division) and have them return a value 
 * 2. Write logic around the four above operations and have them return a singular value based off of the operator
 * 3. Wrap the logic in a function that accepts two numbers so that it can itterate through the logic to find the correct operator 
 * 4. Add console log step to print out the result in the console
 * 
 * NOTES:
 * == used to check a comparison and will return a boolean
 * read up on global variables again
*/

let result;
let operator;

//addition
function add(num1, num2) {
    return result = num1 + num2;
}

//subtraction
function sub(num1, num2) {
    return result = num1 - num2; 
}

//multiplication
function mult(num1, num2){
    return result = num1 * num2;  
}

//division
function div(num1, num2){
    return result = num1 / num2;
}



function calculator(math) {
    const num1String = math.slice(1);
    const num2String = math.slice(2,3);
    const operator = math.slice(1,2);

    const num1 = parseInt(num1String, 10);
    const num2 = parseInt(num2String, 10);
    
    if (operator === "+"){
        return add(num1, num2)
    } else if (operator === "-"){
        return sub(num1, num2)
    } else if (operator === "*") {
        return mult(num1, num2)
    } else if (operator === "/") {
        return div(num1, num2)
    } else {
        return "WUT??!?!"
    }
}

// console.log(calculator('2+2'));

/*
TALKIN SECTION: 

imma undo what i just did but put it in a different way
ohno
*/

/*
    this is my talk section
    
*/

function numOne(numThing) {
let start;
let firstNumber;
let end;
let lastNumber;

for (let i = 0; i < numThing.length; i++) {
    if (isNaN(Number(numThing[i])) || numThing[i] === " ") {
        continue;
    } else {
        firstNumber = numThing[i];
        start = i;
        break;
    }
}

for (let j = start + 1; j < numThing.length; j++) {
    if (isNaN(Number(numThing[j])) || numThing[j] === " ") {
        end = j;
        lastNumber = numThing[j-1];
        break;
    } else {
        continue;
    }
}

if (end === undefined) {
    end = numThing.length - 1;
}

let fullNumberOne = (numThing.substring(start, end));

return {fullNumberOne};
}

function numTwo(numThing) {
    let start;
    let firstNumber;
    let end;
    let lastNumber;
// Here's some food for thought
// You've got this loop here
// and the one below it
// and you've got a loop up above
// and another one above that
// What do they all have in common?

// Think about it this way;
// start at x
// loop through the string until you find something that satisfies condition
// then return

// well, I can replace "keep looping through until it satisfies another condition" with
// start at x
// loop through the string until you find something that satisfies condition
// then return    

// seewhatimean?
// Not inside
// you're pretty much doing the same loop twice
// just with a different starting point and a different condition.
// the i-- bits can make it confusing, but there's actually a way to do it
// with i++
// you just look for the next number after the first one



// ("abcdefg")
// so loops in loops? 
//OHHHHH
// could we keep yeah! yeah yeah! bc then you wouldnt have to worry about the operator or extra spaces mkay mkay mkay 
// wait like a whole new function? not thinking of our caluclator? 
// hey can you see the chat thingy?
// bootom of the screen 

    for (let i = numThing.length; i > numThing.length; i--) {
        if (isNaN(Number(numThing[i])) || numThing[i] === " ") {
            continue;
        } else {
            firstNumber = numThing[i];
            start = i;
            break;
        }
    }

    for (let j = start - 1; j > numThing.length; j--) {
        if (isNaN(Number(numThing[j])) || numThing[j] === " ") {
            end = j;
            lastNumber = numThing[j+1];
            break;
        } else {
            continue;
        }
    }

    if (end === undefined) {
        end = numThing.length + 1;
    }

    let fullNumberTwo = (numThing.substring(start, end));

    return {fullNumberTwo};
}    

    //figure that out later
console.log(numTwo('4+3'));
// console.log(numEnd('qsdeq 4001h/jcejhf'));

//The function Number converts a value to a number. We need that conversion because the result of prompt is a string value, and we want a number. There are similar functions called String and Boolean that convert values to those types.
