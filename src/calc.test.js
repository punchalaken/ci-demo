const { test } = require('node:test');
const assert = require('node:assert');
const { add, divide } = require('./calc');

test('add: 2 + 3 = 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('divide: 10 / 2 = 5', () => {
  assert.strictEqual(divide(10, 2), 5);
});

test('divide by zero throws', () => {
  assert.throws(() => divide(1, 0), /Division by zero/);
});