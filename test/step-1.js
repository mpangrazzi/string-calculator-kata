
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('result equals 0 for an empty string', t => {
  let result = add('');
  t.is(result, 0);
});

test('result equals 1', t => {
  let result = add('1');
  t.is(result, 1);
});

test('result equals 3', t => {
  let result = add('1,2');
  t.is(result, 3);
});
