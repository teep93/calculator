let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue1 = ''
let displayValue2 = '';

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

function displayNumberClick() {
    const displayContainer = document.querySelector('.display');
    document.querySelectorAll('.number-button').forEach((item) => {
        item.addEventListener('click', (e) => {
            let content = displayContainer.textContent;
            if (content === "/" || content === 'x' || content === "+" || content === "-") {
                displayContainer.innerHTML = '';
            }
            displayContainer.innerHTML += e.target.textContent.trim();
            
            

        })
    })
}

function displayOperatorClick() {
    const displayContainer = document.querySelector('.display');
    document.querySelectorAll('.operator-button').forEach((item) => {
        item.addEventListener('click', (e) => {
            displayContainer.innerHTML = '';
            displayContainer.innerHTML = e.target.textContent.trim();

        })
    })
}


displayNumberClick();
displayOperatorClick();

let operation = operate(firstNumber, secondNumber, "*");
console.log(operation);


