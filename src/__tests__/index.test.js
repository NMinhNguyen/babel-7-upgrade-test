import { merge } from '../index';

test('sum', () => {
  expect(merge({a: 'a'}, {b: 'b'})).toEqual({
    a: 'a',
    b: {
      b: 'b',
      c: 'c',
    },
  });
});
