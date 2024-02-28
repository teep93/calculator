let firstNumber = displayNumberClick();
let secondNumber = displayNumberClickTwo();
let operator = displayOperatorClick();
let displayValue1 = "";
let displayValue2 = "";

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
  const displayContainer = document.querySelector(".display");
  document.querySelectorAll(".number-button").forEach((item) => {
    item.addEventListener("click", (e) => {
      let operator = displayContainer.textContent;
      if (
        operator === "/" ||
        operator === "x" ||
        operator === "+" ||
        operator === "-"
      ) {
        displayContainer.innerHTML = "";
      }
        displayContainer.innerHTML += e.target.textContent;
        let result = displayContainer.textContent;
        Number(result);
        console.log(result);
        return result;
        
    });
  });
}

function displayNumberClickTwo() {
    const displayContainer = document.querySelector(".display");
    document.querySelectorAll(".number-button").forEach((item) => {
      item.addEventListener("click", (e) => {
        let operator = displayContainer.textContent;
        if (
          operator === "/" ||
          operator === "x" ||
          operator === "+" ||
          operator === "-"
        ) {
          displayContainer.innerHTML = "";
        }
          displayContainer.innerHTML += e.target.textContent;
          let result = displayContainer.textContent;
          Number(result);
          console.log(result);
          return result;
          
      });
    });
  }

function displayOperatorClick() {
  const displayContainer = document.querySelector(".display");
  document.querySelectorAll(".operator-button").forEach((item) => {
    item.addEventListener("click", (e) => {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML = e.target.textContent.trim();
    let result = displayContainer.textContent;
    console.log(result);
    return result;    
        
    });
  });
}

function displayOperate() {
    
}



let operation = operate(firstNumber, secondNumber, operator);
console.log(operation);

let hello = document.querySelector(".hello")
console.log(hello)
let hello2 = document.querySelector(".hello2");
console.log(hello2);