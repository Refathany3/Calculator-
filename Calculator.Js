// Function that performs basic calculator operations
function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':       // Addition
            return num1 + num2;
        case 'subtract':  // Subtraction
            return num1 - num2;
        case 'multiply':  // Multiplication
            return num1 * num2;
        case 'divide':    // Division
            if (num2 === 0) {
                return "Cannot divide by zero!";
            }
            return num1 / num2;
        default:
            return "Unknown operation!";
    }
}

// Testing the code
let num1 = 10;
let num2 = 5;

console.log("Result (Addition):", calculator(num1, num2, 'add'));
console.log("Result (Subtraction):", calculator(num1, num2, 'subtract'));
console.log("Result (Multiplication):", calculator(num1, num2, 'multiply'));
console.log("Result (Division):", calculator(num1, num2, 'divide'));
