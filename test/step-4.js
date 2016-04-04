
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('result equals 3', t => {
  let result = add('//;\n1;2');
  t.is(result, 3);
});

test('result equals 7', t => {
  let result = add('//!\n1;2!3,1');
  t.is(result, 7);
});
