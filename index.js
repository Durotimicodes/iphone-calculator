"use strict";

// STORING NUMBER AND OPERATORS
const dot = ".";
const plus = "+";
const divide = "/";
const times = "x";
const substration = "-";
const reminder = "%";
const plusMinus = "+/-";
const equalTo = "=";
const num0 = "0";
const num1 = "1";
const num2 = "2";
const num3 = "3";
const num4 = "4";
const num5 = "5";
const num6 = "6";
const num7 = "7";
const num8 = "8";
const num9 = "9";
const operator = [times, plus, substration, divide, reminder, plusMinus];

let firstCalcPart = [];

let secondCalcPart = [];

let storeOperator = [];

// DISPLAY FUNCTIONALITY ON SCREENS

//TIMES FUNCTIONALITY
const timesTheNumber = 1;
const renderMultiplyUIFunction = (timesTheNumber) => {
  document.querySelector(".screen-2").textContent =
    timesTheNumber *
    Number(firstCalcPart.join("")) *
    Number(secondCalcPart.join(""));
};

//ADDITION FUNCTIONALITY
const addTheNumber = 0;
const renderAdditionUIFunction = (addTheNumber) => {
  document.querySelector(".screen-2").textContent =
    addTheNumber +
    Number(firstCalcPart.join("")) +
    Number(secondCalcPart.join(""));
};
//SUBTRACTION FUNCTIONALITY
const subtractTheNumber = [];
const renderSubractUIFunction = (subtractTheNumber) => {
  document.querySelector(".screen-2").textContent =
    Number(firstCalcPart.join("")) - Number(secondCalcPart.join(""));
};

//DIVIDE FUNCTIONALITY
const divideTheNumber = [];
const renderDivideUIFunction = (divideTheNumber) => {
  document.querySelector(".screen-2").textContent = (
    Number(firstCalcPart.join("")) / Number(secondCalcPart.join(""))
  ).toPrecision(3);
};

//MODULE FUNCTIONALITY
const moduleTheNumber = [];
const renderModuleUIFunction = (moduleTheNumber) => {
  document.querySelector(".screen-2").textContent =
    Number(firstCalcPart.join("")) % Number(secondCalcPart.join(""));
};

//PLUS & MINUS FUNCTIONALITY
const plusMinusTheNumber = [];
const renderPlusMinusUIFunction = (plusMinusTheNumber) => {
  document.querySelector(".screen-2").textContent =
    Number(firstCalcPart.join("")) * -1;
};

// RENDER UI FIRST SECTION
const renderUI = (firstCalcPart) => {
  document.querySelector(".screen-2").textContent = Number(
    firstCalcPart.join("")
  );
  document.querySelector(".screen-1").textContent = Number(
    firstCalcPart.join("")
  );
};

// RENDER UI OPERATOR USED
const renderUITwo = (storeOperator) => {
  document.querySelector(".screen-1").textContent = storeOperator;
};

// RENDER UI SECOND SECTION
const renderUIThree = (secondCalcPart) => {
  document.querySelector(".screen-2").textContent = Number(
    secondCalcPart.join("")
  );
  document.querySelector(".screen-1").textContent = Number(
    secondCalcPart.join("")
  );
};

// RENDER END RESULT
let renderCalc = [];
const renderUICalculation = (renderCalc) =>
  (document.querySelector(".screen-1").textContent =
    Number(firstCalcPart.join("")) +
    storeOperator +
    Number(secondCalcPart.join("")));

// FUNCTIONALITY OF DIGITS AND OPERATORS
const myNineFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num9);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num9);
    return renderUI(firstCalcPart);
  }
};

const myEightFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num8);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num8);
    return renderUI(firstCalcPart);
  }
};

const mySevenFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num7);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num7);
    return renderUI(firstCalcPart);
  }
};

const mySixFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num6);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num6);
    return renderUI(firstCalcPart);
  }
};

const myFiveFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num5);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num5);
    return renderUI(firstCalcPart);
  }
};

const myFourFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num4);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num4);
    return renderUI(firstCalcPart);
  }
};

const myThreeFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num3);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num3);
    return renderUI(firstCalcPart);
  }
};

const myTwoFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num2);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num2);
    return renderUI(firstCalcPart);
  }
};

const myOneFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num1);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num1);
    return renderUI(firstCalcPart);
  }
};

const myZeroFunction = function () {
  for (let i = 0; i <= operator.length; i++) {
    if (storeOperator.includes(operator[i])) {
      secondCalcPart.push(num0);
      return renderUIThree(secondCalcPart);
    }
  }
  if (firstCalcPart.length < 5) {
    firstCalcPart.push(num0);
    return renderUI(firstCalcPart);
  }
};

// DISPLAY EACH ITEM ONCLICK

const nine = document
  .querySelector(".nine")
  .addEventListener("click", myNineFunction);

const eight = document
  .querySelector(".eight")
  .addEventListener("click", myEightFunction);

const seven = document
  .querySelector(".seven")
  .addEventListener("click", mySevenFunction);

const six = document
  .querySelector(".six")
  .addEventListener("click", mySixFunction);
const five = document
  .querySelector(".five")
  .addEventListener("click", myFiveFunction);
const four = document
  .querySelector(".four")
  .addEventListener("click", myFourFunction);

const three = document
  .querySelector(".three")
  .addEventListener("click", myThreeFunction);
const two = document
  .querySelector(".two")
  .addEventListener("click", myTwoFunction);
const one = document
  .querySelector(".one")
  .addEventListener("click", myOneFunction);

const zero = document
  .querySelector(".zero")
  .addEventListener("click", myZeroFunction);

// DISPLAY OPERATIONS ONCLICK

// SUBRTACTION
const minus = document
  .querySelector(".minus")
  .addEventListener("click", function () {
    if (!storeOperator.includes(substration)) {
      storeOperator.push(substration);
      renderUITwo(storeOperator);
    }
  });

// DIVISION
const division = document
  .querySelector(".divide")
  .addEventListener("click", function () {
    if (!storeOperator.includes(divide)) {
      storeOperator.push(divide);
      renderUITwo(storeOperator);
    }
  });

// MODULE
const module = document
  .querySelector(".percent")
  .addEventListener("click", function () {
    if (!storeOperator.includes(reminder)) {
      storeOperator.push(reminder);
      renderUITwo(storeOperator);
    }
  });

// PLUS & MINUS
const plusAndMinus = document
  .querySelector(".slash")
  .addEventListener("click", function () {
    if (!storeOperator.includes(plusAndMinus)) {
      storeOperator.push(plusAndMinus);
      renderUITwo(storeOperator);
    }
  });

// DOT
const pullstop = document
  .querySelector(".dot")
  .addEventListener("click", function () {
    if (!storeOperator.includes(dot)) {
      storeOperator.push(dot);
      renderUITwo(storeOperator);
    }
  });

// MULTIPLICATION
const multiplication = document
  .querySelector(".times")
  .addEventListener("click", function () {
    if (!storeOperator.includes(times)) {
      storeOperator.push(times);
      renderUITwo(storeOperator);
    }
  });

//  ADDITION
const add = document
  .querySelector(".plus")
  .addEventListener("click", function () {
    if (!storeOperator.includes(plus)) {
      storeOperator.push(plus);
      renderUITwo(storeOperator);
    }
  });

// CALCULATOR
const equal = document
  .querySelector(".equalTo")
  .addEventListener("click", function () {
    if (storeOperator.length > 1) return;

    if (storeOperator.includes(times)) {
      renderMultiplyUIFunction(timesTheNumber);
      renderUICalculation(renderCalc);
    }
    if (storeOperator.includes(plus)) {
      renderAdditionUIFunction(addTheNumber);
      renderUICalculation(renderCalc);
    }
    if (storeOperator.includes(substration)) {
      renderSubractUIFunction(subtractTheNumber);
      renderUICalculation(renderCalc);
    }
    if (storeOperator.includes(divide)) {
      renderDivideUIFunction(divideTheNumber);
      renderUICalculation(renderCalc);
    }
    if (storeOperator.includes(reminder)) {
      renderModuleUIFunction(moduleTheNumber);
      renderUICalculation(renderCalc);
    }

    if (storeOperator.includes(plusAndMinus)) {
      renderPlusMinusUIFunction(plusMinusTheNumber);
      renderUICalculation(renderCalc);
    }
  });

// RESET BUTTON
const resetNum = 0;
const resetScreenOne = "";
const reset = document
  .querySelector(".AC")
  .addEventListener("click", function () {
    firstCalcPart = [];
    secondCalcPart = [];
    storeOperator = [];
    document.querySelector(".screen-2").textContent = resetNum;
    document.querySelector(".screen-1").textContent = resetScreenOne;
  });
