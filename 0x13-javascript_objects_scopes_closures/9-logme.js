#!/usr/bin/node
let nofarg = 0;

exports.logMe = function (item) {
  console.log(nofarg + ': ' + item);
  nofarg++;
};
