//STEP 1
function halfNumber(number) {
    let half = number / 2;
    console.log(`Half of ${number} is ${half}.`);
    return half;
}
//STEP 2
function squareNumber(number) {
    let result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}
//STEP 3
function percentOf(number1, number2) {
    let percentOfNumber = (number1 / number2) * 100;
    console.log(`${number1} is ${percentOfNumber}% of ${number2}.`);
    return percentOfNumber;
}
//STEP 4
function findModulus(number1, number2) {
    let moduleOfNumber = number1 % number2;
    console.log(`${moduleOfNumber} is the modulus of ${number1} and ${number2}.`);
    return moduleOfNumber;
}

//call the functions to see the results on the console
let number1 = 75;
let number2 = 12;
halfNumber(number1);
squareNumber(number1);
percentOf(number1, number2);
findModulus(number1, number2);






