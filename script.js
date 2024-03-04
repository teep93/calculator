let firstNumber = null
let secondNumber = null
var operator = ""
var operateResult = '' 


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

function operate(num1, num2, oper) {
  if (oper === "+") {
    operateResult = addNum(num1, num2);
  } else if (oper === "-") {
    operateResult = subtractNum(num1, num2)      
  } else if (oper === "x") {
    operateResult = multiplyNum(num1, num2)
  } else if (oper === "/") {
    operateResult = divideNum(num1, num2)
  }
}

const numberBtns = document.querySelectorAll(".number-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const equalsBtn = document.querySelector(".equals-button");
const clearBtn = document.querySelector(".clear-button");
const deleteBtn = document.querySelector(".delete-button")
let displayContainer = document.querySelector(".display");

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener("click", (e) => {
    selectOperator();
    displayContainer.innerHTML += e.target.textContent;
    console.log(firstNumber, secondNumber)
    })
})

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener("click", (e) => {
    firstNumber = displayContainer.innerHTML;
    displayContainer.innerHTML = e.target.textContent;
    operator = displayContainer.innerHTML;
    console.log(firstNumber, secondNumber, operator);
    })
})


equalsBtn.addEventListener("click", (e) => {
selectEquals()
secondNumber = displayContainer.innerHTML;
console.log(firstNumber, secondNumber, operator);
operate(+firstNumber, +secondNumber, operator);
displayContainer.textContent = operateResult;  
console.log(operateResult);  
})

clearBtn.addEventListener("click", (e) => {
  firstNumber = null;
  secondNumber = null;
  operator = ''
  displayContainer.textContent = ''
})


function selectOperator() {
  let operation = displayContainer.textContent;
  if (
    operation === "/" ||
    operation === "x" ||
    operation === "+" ||
    operation === "-") {
    displayContainer.innerHTML = '';
  }
}

function selectEquals() {
  let operate = displayContainer.textContent;
  if (operate === "=") {
    displayContainer.innerHTML = ''
    secondNumber = displayContainer.innerHTML;
    console.log(firstNumber, secondNumber, operator);
  }

}

// ui code

// const height = 500
// const width = 400

// let numbBtns = document.querySelectorAll("number-button");
// numbBtns.forEach((numbBtn) => () {
//   numbBtn.style.width =
  
// }

  
