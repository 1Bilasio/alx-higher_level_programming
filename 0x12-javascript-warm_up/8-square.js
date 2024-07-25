#!/usr/bin/node
const square = Math.floor(Number(process.argv[2]));
if (isNaN(square)) {
  console.log('Missing size');
} else {
  for (let k = 0; k < square; k++) {
    let row = '';
    for (let h = 0; h < square; h++) row += 'X';
    console.log(row);
  }
}
