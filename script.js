let firstNumber = null
let newFirstNumber = null
let secondNumber = null



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

const numberBtns = document.querySelectorAll(".number-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const equalsBtn = document.querySelector(".equals-button");
let displayContainer = document.querySelector(".display");

const add = "+";
const subtract = "-";
const divide = "/";
const multiply = "x";
const equals = "=";


numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener("click", (e) => {
    selectOperator();
    displayContainer.innerHTML += e.target.textContent;
    console.log(firstNumber, secondNumber)
    })
})

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener("click", (e) => {
    if (firstNumber = true) {
      firstNumber = newFirstNumber
    }
    firstNumber = displayContainer.innerHTML;
    displayContainer.innerHTML = e.target.textContent;
    console.log(firstNumber, secondNumber);
    })
})


equalsBtn.addEventListener("click", (e) => {
selectEquals()
secondNumber = displayContainer.innerHTML;
displayContainer.innerHTML = e.target.textContent;
console.log(firstNumber, secondNumber);
})


function selectOperator() {
  let operator = displayContainer.textContent;
  if (
    operator === "/" ||
    operator === "x" ||
    operator === "+" ||
    operator === "-") {
    displayContainer.innerHTML = '';
  }
}

function selectEquals() {
  let operate = displayContainer.textContent;
  if (operate === "=" && firstNumber != null) {
    displayContainer.innerHTML = ''
    secondNumber = displayContainer.innerHTML;
  }
}

// function
  
