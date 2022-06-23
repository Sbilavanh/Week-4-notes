//Question 1
//how to convert this function below into an arrow function
function myFunction(num) { return Math.sqrt(num); }
// My solution
let returnSquareRoot = (num) => {
    return Math.sqrt(num);
}
console.log(returnSquareRoot(a));

//Instructor Solution
let returnSquareRoot = (num) => Math.sqrt(num);
console.log(returnSquareRoot(a));

//Question 2
//how to convert a function into an arrow function and refer to the new function as xor
function myFunction(num1, num2) {
    return num1 ^ num2;
}
//My solution to convert the function into a arrow function 
let xor = (num1, num2) => num1 ^ num2;
console.log(xor(a, b));

//instructor solution 
let xor = (num1, num2) => num1 ^ num2; //I happen to get the same result as the instructor
console.log(xor(a, b));

//Question 3
//how to convert the following function into a arrow function 
function addTwoInputs(a, b) { return a + b; }
//My solution
let returnSum = (a, b) => a + b;
console.log(returnSum(a, b));

//Instructor Solution 
let returnSum = (a, b) => a + b;
console.log(returnSum(a, b));

//Question 4
// how to convert the fololowing function to a arrow funtion 
function myFunction(yearlyPayment) {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2); //arrow functions require a return if they exceed more than 1 line of code
}

//my solution 
let monthlyPayment = (a) => {
    let monthly = a / 12;
    return monthly.toFixed(2); //make sure to declare the specific variable
}
console.log(monthlyPayment(a));

//instructor solution 
let monthlyPayment = (yearlyPayment) => {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
};
console.log(monthlyPayment(a));

//Question 5: Convert the following function into an arrow function. Refer to the new function as revert.
// how to convert this function into a arrow function
function myFunction(value) { return !value; }

//My solution 
let revert = (a) => a = !a;
console.log(revert(a))

//instructor solution 
let revert = (value) => !value;
console.log(revert(a))

//Question 6: Convert the following function into an arrow function. Refer to the new function as returnNumber.
//how I converted this function to an arrow function 
function myFunction(num) {
    return `Your number is $(num)`
}

//My solution 
let returnNumber = a => `your number is` + ' ' + (a); //remember to add a space in a string is ' ' and to add a veriable is + (var)
console.log(returnNumber(a));

// Instructor solution 
let returnNumber = (num) => `Your number is ${num}`;
console.log(returnNumber(a));

// question 7: Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
// how I converted this function below
function myFunction(num1, num2, num3) {
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
}

//my solution
let fancyAlgorithm = (num1, num2, num3) => { //for a for loop in a function you just need a =>
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
};
console.log(fancyAlgorithm(a, b, c));

//insturctor solution 
let fancyAlgorithm = (num1, num2, num3) => { //for a for loop in a function you just need a =>
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
};
console.log(fancyAlgorithm(a, b, c));

//question 8: Convert the following function into an arrow function. Refer to the new function as pythagoras.
//how I converted the dollowing function 
function myFunction(num1, num2) {
    return Math.sqrt((num1 * num2) + (num2 * num2));
}

//my solution 
let pythagoras = (num1, num2) => Math.sqrt((num1 * num2) + (num2 * num2));
console.log(pythagoras(a, b));