
/**
 * Test dependencies
 */

import test from 'ava';
import sc from '..';


test('result equals 0 for an empty string', t => {
  let result = sc('');
  t.is(result, 0);
});

test('throws if string inputs are more than 2', t => {
  t.throws(() => {
    let result = sc('1,2,3');
  }, 'Maximum input values exceeded (2)');
});

test('result equals 1', t => {
  let result = sc('1');
  t.is(result, 1);
});

test('result equals 3', t => {
  let result = sc('1,2');
  t.is(result, 3);
});
