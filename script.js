let firstNumber = 10;
let secondNumber = 15;
let operator = "";

function addNum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtractNum(num1, num2) {
  let sum = num1 - num2;
  return sum;
}

function multiplyNum(num1, num2) {
  let sum = num1 * num2;
  return sum;
}

function divideNum(num1, num2) {
  let sum = num1 / num2;
  return sum;
}

// let addition = addNum(firstNumber, secondNumber);
// console.log(addition);
// let subtraction = subtractNum(firstNumber, secondNumber);
// console.log(subtraction);
// let multiply = multiplyNum(firstNumber, secondNumber);
// console.log(multiply);
// let division = divideNum(firstNumber, secondNumber);
// console.log(division);



function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    addNum(firstNumber, secondNumber);
    let addition = addNum(firstNumber, secondNumber);
    return addition;
  } else if (operator === "-") {
    subtractNum(firstNumber, secondNumber);
    let subtraction = subtractNum(firstNumber, secondNumber);
    return subtraction;
  } else if (operator === "*") {
    multiplyNum(firstNumber, secondNumber);
    let multiply = multiplyNum(firstNumber, secondNumber);
    return multiply;
  } else if (operator === "/") {
    divideNum(firstNumber, secondNumber);
    let division = divideNum(firstNumber, secondNumber);
    return division;
    
  }
}


let operation = operate(firstNumber, secondNumber, "*");
console.log(operation);