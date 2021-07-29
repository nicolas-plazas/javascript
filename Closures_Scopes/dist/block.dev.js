"use strict";

// let y const solo se pueden acceder dentro del bloque en este caso dentro del if
var fruits = function fruits() {
  if (true) {
    var fruits1 = 'apple';
    var _fruits = 'banana';
    var _fruits2 = 'kiwi';
  }

  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
};

fruits(); // Let de manera global

var x = 1;
{
  // let de manera local
  var _x = 2;
  console.log(_x);
}
console.log(x);

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