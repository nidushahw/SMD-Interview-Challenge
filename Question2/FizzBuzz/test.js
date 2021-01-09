const assert = require('assert');
const { fizzBuzz } = require('./index');

describe('Fizz Buzz Unit Tests', () => {
    it('correctly returns Fizz when the argument is divisable by 3', () => {
        assert.equal(fizzBuzz(9), "Fizz");
    });

    it('correctly returns Buzz when the argument is divisable by 5', () => {
        assert.equal(fizzBuzz(10), "Buzz");
    });

    it('returns empty when the argument is not divisable by 3 or 5', () => {
        assert.equal(fizzBuzz(11), "");
    });

    it('returns Fizz when the argument is divisable by 3 and 5', () => {
        assert.equal(fizzBuzz(15), "Fizz");
    });

    it('returns empty when the argument is not a number', () => {
        assert.equal(fizzBuzz("hello"), "");
    });
});