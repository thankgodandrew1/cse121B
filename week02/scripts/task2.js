/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'ThankGod Andrew'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const options = {year: 'numeric'};

// Step 4: place the value of the current year variable into the HTML file
document.getElementById('year').textContent = 
new Date().toLocaleDateString('en-US', options);

// Step 5: declare and instantiate a variable to hold the name of your picture
const myImage = 'img'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/myself.png');


     
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ['Fried Rice', 'Egusi Soup', 'African Salad']

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById('food').textContent = favoriteFood

// Step 3: declare and instantiate a variable to hold another favorite food
let favorite = 'Fried Chicken'

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(favorite)

// Step 5: repeat Step 2
 document.getElementById('food').textContent = favoriteFood

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood