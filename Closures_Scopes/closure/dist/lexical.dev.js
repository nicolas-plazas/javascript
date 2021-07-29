"use strict";

var buildCount = function buildCount(i) {
  var count = i;

  var displayCount = function displayCount() {
    console.log(count++);
  };

  return displayCount;
};

var myCount = buildCount(1);
myCount(); // 1

myCount(); // 2

myCount(); // 3

var myOtherCount = buildCount(10);
myOtherCount(); // 10

myOtherCount(); // 11