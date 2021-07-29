"use strict";

var doSomethingAsync = function doSomethingAsync() {
  return new Promise(function (resolve, reject) {
    true ? setTimeout(function () {
      return resolve('Do Something Async');
    }, 3000) : reject(new Error('Test Error'));
  });
};

var doSomething = function doSomething() {
  var something;
  return regeneratorRuntime.async(function doSomething$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(doSomethingAsync());

        case 2:
          something = _context.sent;
          console.log(something);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

console.log('Before');
doSomething();
console.log('After');

var anotherFunction = function anotherFunction() {
  var something;
  return regeneratorRuntime.async(function anotherFunction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(doSomethingAsync());

        case 3:
          something = _context2.sent;
          console.log(something);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

console.log('Before 1');
anotherFunction();
console.log('After 1');