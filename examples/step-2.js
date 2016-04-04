
/**
 * Module dependencies
 */

var add = require('..');

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generate a random array of random values

var values = [];

for (var i = 0, l = random(0, 1000); i < l; i++) {
  values.push(random(0, 1000));
}

var input = values.join(',');

console.log(`\nadd(${input})`);
console.log('\n' + add(input));
