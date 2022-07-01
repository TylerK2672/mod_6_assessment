const {shuffleArray} = require('./utils')

const arr = [1, 2, 3, 4, 5];

describe('shuffleArray should', () => {
    test('be an array', () =>
    {
        Array.isArray(shuffleArray(arr));
    });
    test('return same length array', () =>
    {
        shuffleArray(arr).length === arr.length
    })
})