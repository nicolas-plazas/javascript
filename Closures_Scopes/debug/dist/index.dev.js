"use strict";

var a = 'Hello';

function hello() {
  var b = 'Hello world';
  var c = 'Hello world!';

  if (true) {
    var d = 'Hello world!!';
    debugger;
  }
}

hello();

var moneyBox = function moneyBox() {
  debugger;
  var saveCoins = 0;

  var countCoins = function countCoins(coins) {
    debugger;
    saveCoins += coins;
    console.log("MoneyBox: $".concat(saveCoins));
  };

  return countCoins;
};

var myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10); // Chrome es sources