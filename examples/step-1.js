
/**
 * Module dependencies
 */

var add = require('..');


console.log('add(\'\')');
console.log(add());

console.log('\nadd(\'1\')');
console.log(add('1'));

console.log('\nadd(\'1,2\')');
console.log(add('1,2'));

console.log('\nadd(\'1,2,3\')');
console.log(add('1,2,3'));
