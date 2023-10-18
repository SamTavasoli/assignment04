// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        if (y === 0) {
          return "Cannot divide by zero";
        }
        return x / y;
      default:
        return "Invalid operation";
    }
  }

let continueCalculation;

do {
// COLLECT FIRST NUMBER FROM USER
let firstNumber = parseFloat(prompt("Enter the first number:"));
// COLLECT SECOND NUMBER FROM USER
let secondNumber = parseFloat(prompt("Enter the second number:"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt("Choose an operation (+ , - , * , / ):");
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

let result = calculate(firstNumber, secondNumber, operation);
alert(`Result: ${result}`);

continueCalculation = prompt("Do you want to perform another calculation? (yes/no)").toLowerCase();

} while (continueCalculation === "yes");