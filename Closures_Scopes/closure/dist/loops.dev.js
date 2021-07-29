"use strict";

// No utilizar var sino let para no reescribir valores
var anotherFunction = function anotherFunction() {
  var _loop = function _loop(i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  };

  for (var i = 0; i < 10; i++) {
    _loop(i);
  }
};

anotherFunction();