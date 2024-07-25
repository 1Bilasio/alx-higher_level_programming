#!/usr/bin/node
const y = Math.floor(Number(process.argv[2]));
if (isNaN(y)) {
  console.log('Missing number of occurrences');
} else {
  for (let k = 0; k < y; k++) {
    console.log('C is fun');
  }
}
