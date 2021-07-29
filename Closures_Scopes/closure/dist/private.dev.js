"use strict";

var person = function person() {
  // Variable privada
  var saveName = "Name";
  return {
    getName: function getName() {
      return saveName;
    },
    setName: function setName(name) {
      saveName = name;
    }
  };
};