// Activity 1 - map
const values = ['one', 'two', 'three'];
const valuesHtml = values.map(function (value){
    return `<li>${value}</li>`;
});
document.getElementById('myList').innerHTML = valuesHtml.join();

//Activity 2 - map
// Declare an array with letter grades in it: ['A', 'B', 'A']
//Write a function that will take one letter grade, and return the appropriate gpa points for that grade.
const grades = ['A', 'B', 'A']
function converter(grade) {
    let points = 0;
    if (grade == 'A'){
        points = 4;
    }
    else if (grade == 'B'){
        points == 3;
    }
    return points
}
const gpaPoints = grades.map(converter)

//Activity 3 - Reduce
// Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// Using reduce calculate the GPA from the array of gpaPoints.
//const gpaPoints = grades.map(converter) 
const totalPoints = gpaPoints.reduce(function (total, item){
    return total + item;
});
const gpa = totalPoints / gpaPoints.length

// example 2
// this is the same thing as above, but with an arrow function
// const totalPoints = gpaPoints.reduce((total, item) => total + item);
// const gpa = totalPoints / gpaPoints.length;

// this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//Activity 4 -Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortFruits = fruits.filter((fruit) => fruit.length <6);

// Activity 5 - indexOf
values = [12, 34, 21, 54];
luckNumber = 21;
let luckyIndex = values.indexOf(luckNumber);