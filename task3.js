 // Part 1: Functions and Parameters — 5 Questions

// Q1. Create a function welcome() that prints "Welcome to JavaScript".
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
// Output: Welcome to JavaScript

// Q2. Create a function studentDetails(name, age, cgpa)
// that prints all three values. Call it with two different students.
function studentDetails(name, age, cgpa) {
    console.log(name);
    console.log(age);
    console.log(cgpa);
}

studentDetails("Rohith", 25, 9.08);
studentDetails("Sai", 23, 8.5);
// Output:
// Rohith
// 25
// 9.08
// Sai
// 23
// 8.5

// Q3. Create a function calculateFee(fee) that returns
// the student fee. Store the returned value in a variable and print it.
function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(200000);
console.log(studentFee);
// Output: 200000


// Q4. Create a function discount(percent) that calculates
// a discount on a fee of Rs. 200,000 and prints the final fee.
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log(finalFee);
}

discount(10);
// Output: 180000


// Q5. Create a function studentForm(name, age, disability = "no").
// Call it three times, including once without passing disability.
function studentForm(name, age, disability = "no") {
    console.log(name);
    console.log(age);
    console.log(disability);
}

studentForm("Rohith", 25, "no");
studentForm("Sai", 24, "yes");
studentForm("Kumar", 22);
// Output:
// Rohith
// 25
// no
// sai
// 24
// yes
// Kumar
// 22
// no

// Part 2: Function Types and Scope — 5 Questions


// Q6. Create a named function that accepts a message and prints it.
function displayMessage(message) {
    console.log(message);
}

displayMessage("Welcome to JavaScript");
// Output: Welcome to JavaScript

// Q7. Create an anonymous function and store it in a variable.
// Pass a name to it and print the name.
let printStudentName = function(name) {
    console.log(name);
};

printStudentName("Rohith");
// Output: Rohith

// Q8. Create an arrow function that accepts a number and prints it.
let printNumber = (number) => {
    console.log(number);
};

printNumber(25);
// Output: 25


// Q9. Create a function containing var, let, and const inside
// an if block. Check which variables can be accessed
// inside and outside the block.
function scopeDemo() {
    if (true) {
        var varValue = 10;
        let letValue = 20;
        const constValue = 30;

        console.log("Inside if - var:", varValue);
        console.log("Inside if - let:", letValue);
        console.log("Inside if - const:", constValue);
    }

    console.log("Outside if - var:", varValue);

    try {
        console.log(letValue);
    } catch (error) {
        console.log("let cannot be accessed outside the if block");
    }

    try {
        console.log(constValue);
    } catch (error) {
        console.log("const cannot be accessed outside the if block");
    }
}

scopeDemo();
// Output:
// Inside if - var: 10
// Inside if - let: 20
// Inside if - const: 30
// Outside if - var: 10
// let cannot be accessed outside the if block
// const cannot be accessed outside the if block


// Q10. Predict the output of this code.
console.log(value);
var value = 10;
// Output: undefined


// Part 3: Callback and Higher-Order Functions — 6 Questions


// Q11. Create two functions, first() and second().
// Pass second as a callback to first() and execute it inside first().
function second() {
    console.log("This is the second function");
}

function first(callback) {
    console.log("This is the first function");
    callback();
}

first(second);
// Output:
// This is the first function
// This is the second function


// Q12. Create an add(callback, a, b) function that prints
// the sum of two numbers and then calls the callback with two numbers.
function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(a, b);
}

function showNumbers(a, b) {
    console.log("First number:", a);
    console.log("Second number:", b);
}

add(showNumbers, 10, 5);
// Output:
// Sum: 15
// First number: 10
// Second number: 5


// Q13. Create a sub(num1, num2) arrow function and
// pass it as a callback to the add() function.
let sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

add(sub, 10, 5);
// Output:
// Sum: 15
// Subtraction: 5


// Q14. Create a multiply(callback, a, b) function that prints
// the multiplication result and then executes the callback.
function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function afterMultiply() {
    console.log("Multiplication completed");
}

multiply(afterMultiply, 4, 5);
// Output:
// Multiplication: 20
// Multiplication completed


// Q15. Create a divide(num1, num2) function and
// pass it as a callback to another function.
function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}

function calculateDivision(callback, a, b) {
    callback(a, b);
}

calculateDivision(divide, 20, 4);
// Output: Division: 5


// Q16. Create a higher-order function that accepts a callback
// and calls it with a student's name.
function studentDetailsCallback(callback) {
    callback("Rohith");
}

function printStudent(name) {
    console.log("Student name:", name);
}

studentDetailsCallback(printStudent);
// Output: Student name: Rohith


// Part 4: Generator Functions — 5 Questions


// Q17. Create a generator function that yields these values
// one by one: "10% cashback", "30% cashback",
// and "Better luck next time".
function* cashbackOffers() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
// Output:
// 10% cashback
// 30% cashback
// Better luck next time


// Q18. Call .next() three times on a generator object
// and observe the returned values.
function* numberGenerator() {
    yield 10;
    yield 20;
    yield 30;
}

let numbers = numberGenerator();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
// Output:
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }


// Q19. Create a generator function that yields five
// different discount messages. Print each using a for-of loop.
function* discountMessages() {
    yield "10% discount";
    yield "20% discount";
    yield "30% discount";
    yield "40% discount";
    yield "50% discount";
}

for (let message of discountMessages()) {
    console.log(message);
}
// Output:
// 10% discount
// 20% discount
// 30% discount
// 40% discount
// 50% discount


// Q20. Create a generator function that yields three
// student names. Use a for-of loop to display them.
function* studentNameGenerator() {
    yield "Rohith";
    yield "Arun";
    yield "Kumar";
}

for (let student of studentNameGenerator()) {
    console.log(student);
}
// Output:
// Rohith
// Arun
// Kumar


// Q21. Create a generator function with four yield statements.
// Check the done property after the yielded values are consumed.
function* valueGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let generatedValues = valueGenerator();

console.log(generatedValues.next());
console.log(generatedValues.next());
console.log(generatedValues.next());
console.log(generatedValues.next());
console.log(generatedValues.next());
// Output:
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
// { value: 40, done: false }
// { value: undefined, done: true }



// Q25. Create a curried function that accepts product price,
// discount percentage, and quantity, then calculates
// the total discounted price.
function calculateDiscountedPrice(price) {
    return function(discountPercentage) {
        return function(quantity) {
            let discountedPrice = price - (price * discountPercentage / 100);
            return discountedPrice * quantity;
        };
    };
}

let totalPrice = calculateDiscountedPrice(1000)(10)(3);
console.log(totalPrice);
// Output: 2700


// Q26. Write a normal three-parameter function and its
// curried equivalent. Call both with the same values
// and compare their results.
function normalAddition(a, b, c) {
    return a + b + c;
}

function curriedAddition(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal function:", normalAddition(5, 10, 15));
console.log("Curried function:", curriedAddition(5)(10)(15));
// Output:
// Normal function: 30
// Curried function: 30


// Part 6: IIFE, Return, and Mixed Practice — 4 Questions


// Q27. Create an IIFE that accepts a product name and discount
// percentage, then displays a sale message using a template string.
(function (productName, discountPercentage) {
    console.log(`${productName} is available at ${discountPercentage}% discount!`);
})("Laptop", 20);
// Output: Laptop is available at 20% discount!


// Q28. Create a function that returns a number.
// Store the returned value in a variable and print it.
function getNumber() {
    return 100;
}

let returnedNumber = getNumber();
console.log(returnedNumber);
// Output: 100


// Q29. Create a function that accepts a student's marks
// and returns the marks. Use the returned value in another variable.
function getStudentMarks(marks) {
    return marks;
}

let studentMarks = getStudentMarks(90);
console.log(studentMarks);
// Output: 90


// Q30. Create a student fee calculator using a function
// with a default parameter, a callback function to calculate
// the discount, and a return value for the final fee.
function calculateStudentFee(fee, discountPercentage = 10, callback) {
    let discountAmount = callback(fee, discountPercentage);
    let finalFee = fee - discountAmount;
    return finalFee;
}

function calculateFeeDiscount(fee, discountPercentage) {
    return fee * discountPercentage / 100;
}

let finalStudentFee = calculateStudentFee(
    200000,
    10,
    calculateFeeDiscount
);

console.log("Final student fee:", finalStudentFee);
// Output: Final student fee: 180000
