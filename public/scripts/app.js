"use strict";

// Arguments functions no longer bound with arrow functions
var add = function add(a, b) {
  return a + b;
};

// This keyword, no longer bound. Arrow functions don't have own context
