"use strict";

var fetchData = require('../utils/fetchData');

var API = 'https://rickandmortyapi.com/api/character/';
fetchData(API).then(function (data) {
  console.log(data.info.count);
  return fetchData("".concat(API).concat(data.results[0].id));
}).then(function (data) {
  console.log(data.name);
  return fetchData(data.origin.url);
}).then(function (data) {
  console.log(data.dimension);
})["catch"](function (error) {
  return console.error(error);
});