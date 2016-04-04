
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('process an unknown amount of numbers', t => {

  let values = [];

  for (let i = 0, l = random(0, 1000); i < l; i++) {
    values.push(random(0, 1000));
  }

  let expected = values.reduce((p, n) => {
    return p + n;
  });

  let input = values.join(',');
  let result = add(input);

  t.same(result, expected);

});

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
