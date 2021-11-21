"use strict";

// STORING NUMBER AND OPERATORS
const dot = ".";
const plus = "+";
const divide = "/";
const times = "x";
const substration = "-";
const reminder = "%";
const equalTo = "=";
const num0 = 0;
const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;
const num6 = 6;
const num7 = 7;
const num8 = 8;
const num9 = 9;
let array = [];
let arrayNew = []; //why this arrayNew?

let result = [];

// DISPLAY FUNCTIONALITY ON SCREENS

//TIMES FUNCTIONALITY
const multiplicationOperation = (arrayNew) => {
  if (!arrayNew[2]) {
    result.push(arrayNew[0] * arrayNew[1]);
    return result;
  }
  if (!arrayNew[3]) {
    result.push(arrayNew[0] * arrayNew[1] * arrayNew[2]);
    return result;
  }
  if (!arrayNew[4]) {
    result.push(arrayNew[0] * arrayNew[1] * arrayNew[2] * arrayNew[3]);
    return result;
  }
  if (!arrayNew[5]) {
    result.push(
      arrayNew[0] * arrayNew[1] * arrayNew[2] * arrayNew[3] * arrayNew[4]
    );
    return result;
  }
  if (!arrayNew[6]) {
    result.push(
      arrayNew[0] *
        arrayNew[1] *
        arrayNew[2] *
        arrayNew[3] *
        arrayNew[4] *
        arrayNew[5]
    );
    return result;
  }
  if (!arrayNew[7]) {
    result.push(
      arrayNew[0] *
        arrayNew[1] *
        arrayNew[2] *
        arrayNew[3] *
        arrayNew[4] *
        arrayNew[5] *
        arrayNew[6]
    );
    return result;
  }
  if (!arrayNew[8]) {
    result.push(
      arrayNew[0] *
        arrayNew[1] *
        arrayNew[2] *
        arrayNew[3] *
        arrayNew[4] *
        arrayNew[5] *
        arrayNew[6] *
        arrayNew[7]
    );
    return result;
  }
  if (!arrayNew[9]) {
    result.push(
      arrayNew[0] *
        arrayNew[1] *
        arrayNew[2] *
        arrayNew[3] *
        arrayNew[4] *
        arrayNew[5] *
        arrayNew[6] *
        arrayNew[7] *
        arrayNew[8]
    );
    return result;
  }
};

//ADDITION FUNCTIONALITY
const additionOperation = (arrayNew) => {
  if (!arrayNew[2]) {
    result.push(arrayNew[0] + arrayNew[1]);
    return result;
  }
  if (!arrayNew[3]) {
    result.push(arrayNew[0] + arrayNew[1] + arrayNew[2]);
    return result;
  }
  if (!arrayNew[4]) {
    result.push(arrayNew[0] + arrayNew[1] + arrayNew[2] + arrayNew[3]);
    return result;
  }
  if (!arrayNew[5]) {
    result.push(
      arrayNew[0] + arrayNew[1] + arrayNew[2] + arrayNew[3] + arrayNew[4]
    );
    return result;
  }
  if (!arrayNew[6]) {
    result.push(
      arrayNew[0] +
        arrayNew[1] +
        arrayNew[2] +
        arrayNew[3] +
        arrayNew[4] +
        arrayNew[5]
    );
    return result;
  }
  if (!arrayNew[7]) {
    result.push(
      arrayNew[0] +
        arrayNew[1] +
        arrayNew[2] +
        arrayNew[3] +
        arrayNew[4] +
        arrayNew[5] +
        arrayNew[6]
    );
    return result;
  }
  if (!arrayNew[8]) {
    result.push(
      arrayNew[0] +
        arrayNew[1] +
        arrayNew[2] +
        arrayNew[3] +
        arrayNew[4] +
        arrayNew[5] +
        arrayNew[6] +
        arrayNew[7]
    );
    return result;
  }
  if (!arrayNew[9]) {
    result.push(
      arrayNew[0] +
        arrayNew[1] +
        arrayNew[2] +
        arrayNew[3] +
        arrayNew[4] +
        arrayNew[5] +
        arrayNew[6] +
        arrayNew[7] +
        arrayNew[8]
    );
    return result;
  }
};

//SUBTRACTION FUNCTIONALITY
const subtractionOperation = (arrayNew) => {
  if (!arrayNew[2]) {
    result.push(arrayNew[0] - arrayNew[1]);
    return result;
  }
  if (!arrayNew[3]) {
    result.push(arrayNew[0] - arrayNew[1] - arrayNew[2]);
    return result;
  }
  if (!arrayNew[4]) {
    result.push(arrayNew[0] - arrayNew[1] - arrayNew[2] - arrayNew[3]);
    return result;
  }
  if (!arrayNew[5]) {
    result.push(
      arrayNew[0] - arrayNew[1] - arrayNew[2] - arrayNew[3] - arrayNew[4]
    );
    return result;
  }
  if (!arrayNew[6]) {
    result.push(
      arrayNew[0] -
        arrayNew[1] -
        arrayNew[2] -
        arrayNew[3] -
        arrayNew[4] -
        arrayNew[5]
    );
    return result;
  }
  if (!arrayNew[7]) {
    result.push(
      arrayNew[0] -
        arrayNew[1] -
        arrayNew[2] -
        arrayNew[3] -
        arrayNew[4] -
        arrayNew[5] -
        arrayNew[6]
    );
    return result;
  }
  if (!arrayNew[8]) {
    result.push(
      arrayNew[0] -
        arrayNew[1] -
        arrayNew[2] -
        arrayNew[3] -
        arrayNew[4] -
        arrayNew[5] -
        arrayNew[6] -
        arrayNew[7]
    );
    return result;
  }
  if (!arrayNew[9]) {
    result.push(
      arrayNew[0] -
        arrayNew[1] -
        arrayNew[2] -
        arrayNew[3] -
        arrayNew[4] -
        arrayNew[5] -
        arrayNew[6] -
        arrayNew[7] -
        arrayNew[8]
    );
    return result;
  }
};

//DIVIDE FUNCTIONALITY
const divideOperation = (arrayNew) => {
  if (!arrayNew[2]) {
    result.push(arrayNew[0] / arrayNew[1]);
    return result;
  }
  if (!arrayNew[3]) {
    result.push(arrayNew[0] / arrayNew[1] / arrayNew[2]);
    return result;
  }
  if (!arrayNew[4]) {
    result.push(arrayNew[0] / arrayNew[1] / arrayNew[2] / arrayNew[3]);
    return result;
  }
  if (!arrayNew[5]) {
    result.push(
      arrayNew[0] / arrayNew[1] / arrayNew[2] / arrayNew[3] / arrayNew[4]
    );
    return result;
  }
  if (!arrayNew[6]) {
    result.push(
      arrayNew[0] /
        arrayNew[1] /
        arrayNew[2] /
        arrayNew[3] /
        arrayNew[4] /
        arrayNew[5]
    );
    return result;
  }
  if (!arrayNew[7]) {
    result.push(
      arrayNew[0] /
        arrayNew[1] /
        arrayNew[2] /
        arrayNew[3] /
        arrayNew[4] /
        arrayNew[5] /
        arrayNew[6]
    );
    return result;
  }
  if (!arrayNew[8]) {
    result.push(
      arrayNew[0] /
        arrayNew[1] /
        arrayNew[2] /
        arrayNew[3] /
        arrayNew[4] /
        arrayNew[5] /
        arrayNew[6] /
        arrayNew[7]
    );
    return result;
  }
  if (!arrayNew[9]) {
    result.push(
      arrayNew[0] /
        arrayNew[1] /
        arrayNew[2] /
        arrayNew[3] /
        arrayNew[4] /
        arrayNew[5] /
        arrayNew[6] /
        arrayNew[7] /
        arrayNew[8]
    );
    return result;
  }
};

// RENDER UI
const renderUI = (array) => {
  document.querySelector(".screen-2").textContent = array.join("");
  document.querySelector(".screen-1").textContent = array.join("");
};

// FUNCTIONALITY OF DIGITS AND OPERATORS
const myNineFunction = function () {
  if (array.length > 9) return;
  array.push(num9);
  arrayNew.push(num9);
  renderUI(array);
};

const myEightFunction = function () {
  if (array.length > 9) return;
  array.push(num8);
  arrayNew.push(num8);
  renderUI(array);
};

const mySevenFunction = function () {
  if (array.length > 9) return;
  array.push(num7);
  arrayNew.push(num7);
  renderUI(array);
};

const mySixFunction = function () {
  if (array.length > 9) return;
  array.push(num6);
  arrayNew.push(num6);
  renderUI(array);
};

const myFiveFunction = function () {
  if (array.length > 9) return;
  array.push(num5);
  arrayNew.push(num5);
  renderUI(array);
};

const myFourFunction = function () {
  if (array.length > 9) return;
  array.push(num4);
  arrayNew.push(num4);
  renderUI(array);
};

const myThreeFunction = function () {
  if (array.length > 9) return;
  array.push(num3);
  arrayNew.push(num3);
  renderUI(array);
};

const myTwoFunction = function () {
  if (array.length > 9) return;
  array.push(num2);
  arrayNew.push(num2);
  renderUI(array);
};

const myOneFunction = function () {
  if (array.length > 9) return;
  array.push(num1);
  arrayNew.push(num1);
  renderUI(array);
};

const myZeroFunction = function () {
  if (array.length > 9) return;
  array.push(num0);
  arrayNew.push(num0);
  renderUI(array);
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
    if (array.length > 8) return;
    if (!array.includes(substration)) {
      array.push(substration);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

// DIVISION
const division = document
  .querySelector(".divide")
  .addEventListener("click", function () {
    if (array.length > 8) return;
    if (!array.includes(divide)) {
      array.push(divide);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

// PERCENTAGE
const percentage = document
  .querySelector(".percent")
  .addEventListener("click", function () {
    if (array.length > 8) return;
    if (!array.includes(reminder)) {
      array.push(percentage);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

// DOT
const pullstop = document
  .querySelector(".dot")
  .addEventListener("click", function () {
    if (array.length > 8) return;
    if (!array.includes(dot)) {
      array.push(dot);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

// MULTIPLICATION
const multiplication = document
  .querySelector(".times")
  .addEventListener("click", function () {
    if (array.length > 8) return;
    if (!array.includes(times)) {
      array.push(times);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

//  ADDITION
const add = document
  .querySelector(".plus")
  .addEventListener("click", function () {
    if (array.length > 8) return;
    if (!array.includes(plus)) {
      array.push(plus);
      renderUI(array);
    } else {
      return equalTo;
    }
  });

// CALCULATOR
const equal = document
  .querySelector(".equalTo")
  .addEventListener("click", function () {
    if (array.includes(plus) && array.includes(times)) {
      return;
    }

    if (array.length > 8) return;
    if (!array.includes(equalTo)) {
      array.push(equalTo);
    } else {
      return;
    }
    document.querySelector(".screen-1").textContent = array.join("");
    if (array.includes(times)) {
      document.querySelector(".screen-2").textContent =
        multiplicationOperation(arrayNew);
    }
    if (array.includes(plus)) {
      document.querySelector(".screen-2").textContent =
        additionOperation(arrayNew);
    }
    if (array.includes(substration)) {
      document.querySelector(".screen-2").textContent =
        subtractionOperation(arrayNew);
    }
    if (array.includes(divide)) {
      document.querySelector(".screen-2").textContent = Number(
        divideOperation(arrayNew)
      ).toPrecision(4);
    }
  });

// RESET BUTTON
const resetNum = 0;
const resetScreenOne = "";

const reset = document
  .querySelector(".AC")
  .addEventListener("click", function () {
    array = [];
    arrayNew = [];
    result = [];
    document.querySelector(".screen-2").textContent = array;
    document.querySelector(".screen-2").textContent = resetNum;
    document.querySelector(".screen-1").textContent = resetScreenOne;
  });
