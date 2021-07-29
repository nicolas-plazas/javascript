"use strict";

var helloWorld = function helloWorld() {
  var hello = 'Hello World';
  console.log(hello);
};

helloWorld(); // ÁMBITO LÉXICO
// Variable Global

var scope = "i am global";

var functionScope = function functionScope() {
  // Variable local
  var scope = "i am just a local";

  var func = function func() {
    return scope;
  };

  console.log(func());
};

functionScope();
console.log(scope);