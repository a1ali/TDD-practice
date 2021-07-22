let reverseString = require('../scripts/reverseString.js')

test('check if string is reversed', () => {
    expect(reverseString('hello')).toBe('olleh')
})