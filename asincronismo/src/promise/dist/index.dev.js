"use strict";

var somethingWillHappen = function somethingWillHappen() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve('Hey!');
    } else {
      reject('something wrong');
    }
  });
};

somethingWillHappen().then(function (response) {
  return console.log(response);
})["catch"](function (error) {
  return console.error(error);
});

var somethingWillHappen2 = function somethingWillHappen2() {
  return new Promise(function (resolve, reject) {
    if (true) {
      setTimeout(function () {
        resolve('true');
      }, 2000);
    } else {
      var error = new Error('something wrong');
      reject(error);
    }
  });
};

somethingWillHappen2().then(function (response) {
  return console.log(response);
})["catch"](function (error) {
  return console.error(error);
}); // Promise.all ayuda a llamar múltiples promesas, manteniendo un código limpio y ordenado

Promise.all([somethingWillHappen(), somethingWillHappen2()]).then(function (response) {
  console.log('Array of results', response); // output: Array of results [ 'Hey!', 'true' ]
})["catch"](function (error) {
  return console.error(error);
});