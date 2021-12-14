"use strict";

const result = {
  failure: ["no-var", "var-on-top", "linebreak"],
};

function makeList(arr) {
  for (let i = 0; i <= arr.length; i++) {
    const failureItems = `<li class="text-warning"> ${arr[i]} </li>`;
  }
  return failureItems;
}
const failureList = makeList(result.failure);

// class sytax to define a constructor function

var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");

//
