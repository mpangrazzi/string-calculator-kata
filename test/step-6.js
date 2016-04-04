
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('ignore big numbers', t => {
  let result = add('1,1002,4');
  t.is(result, 5);
});

test('result equals 1004', t => {
  let result = add('1,1000,3');
  t.is(result, 1004);
});
