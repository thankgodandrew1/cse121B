/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2){
    let sum = parseFloat(number1) + parseFloat(number2);
    return sum;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of 
// two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers(){
    const addend1 = Number(document.getElementById('addend1').value);
    const addend2 = Number(document.getElementById('addend2').value);
    const sum = add(addend1, addend2);
    document.getElementById('sum').outerHTML = sum;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number, number1){
    return difference = parseFloat(number) - parseFloat(number1);
}
const subtractNumbers = function (){
    const minuend = Number(document.getElementById('minuend').value);
    const subtrahend = Number(document.getElementById('subtrahend').value);
    const difference = subtract(minuend, subtrahend);
    document.getElementById('difference').outerHTML = difference;
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers)

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number, number1) => parseFloat(number) * parseFloat(number1);

const mulitplyNumbers =  () => {
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    const product = multiply(factor1, factor2);
    document.getElementById('product').outerHTML = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', mulitplyNumbers)

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form
// controls with IDs of dividend, divisor, quotient and divideNumbers
const division = (number, number1) => parseFloat(number) / parseFloat(number1);

const divideNumbers =  () => {
    const dividend = Number(document.getElementById('dividend').value);
    const divisor = Number(document.getElementById('divisor').value);
    const quotient = division(dividend, divisor);
    document.getElementById('quotient').outerHTML = quotient;
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers)

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').textContent = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').textContent = arr
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = arr.filter((numbers) => numbers % 2 !== 0)
document.querySelector('#odds').textContent = odds

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even = arr.filter((numbers) => numbers % 2 === 0)
document.querySelector('#evens').textContent = even

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sum = arr.reduce(function(a, b){
    return a + b
});
document.getElementById('sumOfArray').textContent = sum
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const mulitply = arr.map((a) => a * 2 )
document.getElementById('multiplied').textContent = mulitply;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const multipliedSum = mulitply.reduce((a, b) => a+ b)
document.getElementById('sumOfMultiplied').textContent = multipliedSum