const {shuffleArray} = require('./utils')

const arr = [1, 2, 3, 4, 5];

describe('shuffleArray should', () => {
    test('be an array', () =>
    {
        expect(Array.isArray(shuffleArray(arr))).toBeTruthy();
    });
    test('return same length array', () =>
    {
        expect(shuffleArray(arr).length).toEqual(arr.length)
    })
})